# 🔍 Senti-Trade.ai Frontend Data Reflection - Debug Guide

## 📊 Data Flow Overview

```
User Search (Dashboard)
    ↓
handleGetData() [UserContext]
    ↓
axios.post("http://localhost:3001/api/sentiment/getData", {topic})
    ↓
Server: getSentimentDataController
    ↓
getNewsService() → NewsAPI → Get 20 articles
    ↓
Take first 5 articles (dd)
    ↓
getSentimentData() → Calculate sentiment (AI or Local)
    ↓
Response: {newsData: [], rawData: {sentimentData, aditionAIDATA}}
    ↓
Frontend: Process & Map data
    ↓
updateStateWithData() → Update React State
    ↓
Dashboard Re-renders ✓
```

---

## 🔴 ISSUES FOUND & FIXED

### ❌ **Issue #1: Duplicate Response Fields**

**Location:** `Server/controllers/getSentiment.controllers.js` (Line 34-44)

**Problem:**

```javascript
// ❌ BEFORE - Returning duplicate data
res.status(200).json({
  status: true,
  data: rawData, // Same as rawData below
  AI_insight: rawData?.aditionAIDATA,
  rawData, // Redundant
  newsData: dd,
});
```

**Why it matters:** Creates confusion and wastes bandwidth

**✅ FIXED TO:**

```javascript
res.status(200).json({
  status: true,
  newsData: dd,
  rawData: {
    sentimentData: rawData?.sentimentData,
    aditionAIDATA: rawData?.aditionAIDATA,
  },
});
```

---

### ❌ **Issue #2: No State Reset Before New Search**

**Location:** `Client/src/Context/UserContext.jsx` (Line 37-58)

**Problem:**

- When user searches for a new topic, old data wasn't cleared
- Could show stale sentiment data for a few seconds
- Can cause confusion with previous searches

**✅ FIXED BY:**

```javascript
// Reset state before fetching new data
setNewNews([]);
setSeenNews([]);
setSentimentData({ score: 0, weight: 0 });
setDistributionData({});
setAIinsight("");
setHotTopic([]);
setError("");
```

---

### ❌ **Issue #3: Silent Error Handling**

**Location:** `Client/src/Context/UserContext.jsx` (Line 65-70)

**Problem:**

```javascript
// ❌ BEFORE - Catches error but doesn't show it
catch (error) {
  console.error("Error fetching data:", error);
  setError(error);  // Error object, not string!
}
```

- Error set as object instead of string
- No error display in UI
- User doesn't know why search failed

**✅ FIXED WITH:**

```javascript
catch (error) {
  console.error("Error fetching data:", error.message || error);
  setError(`Failed to fetch data: ${error.response?.data?.message || error.message}`);
}
```

---

### ❌ **Issue #4: No Error Display in UI**

**Location:** `Client/src/Components/Dashboard.jsx`

**Problem:** Error state existed but wasn't displayed to user

**✅ ADDED ERROR BANNER:**

```javascript
{
  error && (
    <div className="w-full p-3 bg-red-900/30 border border-red-500/50 rounded-lg text-red-300 text-sm flex items-center justify-between">
      <span>{error}</span>
      <button
        onClick={() => setError("")}
        className="text-red-400 hover:text-red-300"
      >
        ✕
      </button>
    </div>
  );
}
```

---

### ❌ **Issue #5: Missing setError Export**

**Location:** `Client/src/Context/UserContext.jsx` (Line 78-95)

**Problem:** `setError` wasn't exported from context provider

**✅ FIXED BY ADDING TO PROVIDER:**

```javascript
<UserContext.Provider
  value={{
    // ... other values
    error,
    setError,  // ← Added
  }}
>
```

---

## ✅ DEBUGGING CHECKLIST

Before running, verify:

### 1. **Server Setup**

- [ ] Server is running on port 3001: `npm start` from `/Server` directory
- [ ] Check `Server/.env` has:
  ```
  PORT = 3001
  FRONTEND_URL = http://localhost:5173
  ```

### 2. **Client Setup**

- [ ] Client is running on port 5173: `npm run dev` from `/Client` directory
- [ ] Check `Client/.env` has:
  ```
  VITE_SERVER_URL = http://localhost:3001/api/
  ```

### 3. **API Keys**

- [ ] `Server/.env` has valid:
  - `News_API_Key` (from newsapi.org)
  - `Gemini_API_Key` (from Google AI Studio)

### 4. **Dependencies**

- [ ] Server: `npm install` ✓
- [ ] Client: `npm install axios` ✓

---

## 🧪 Testing the Flow

### Test 1: Check if Server is Running

```bash
curl http://localhost:3001/
```

Should see: `app is running smoothly at port 3001`

### Test 2: Test API Endpoint

```bash
curl -X POST http://localhost:3001/api/sentiment/getData \
  -H "Content-Type: application/json" \
  -d '{"topic": "nvidia"}'
```

Should return:

```json
{
  "status": true,
  "newsData": [...],
  "rawData": {
    "sentimentData": [...],
    "aditionAIDATA": {...}
  }
}
```

### Test 3: Check Browser Console

- Open DevTools (F12)
- Search for a stock
- Look for console logs:
  - `Fetching from: http://localhost:3001/api/sentiment/getData`
  - `Response received: {...}`
  - `Processed data: [...]`

---

## 🐛 Common Issues & Solutions

| Issue               | Symptom                                    | Solution                                             |
| ------------------- | ------------------------------------------ | ---------------------------------------------------- |
| Server not running  | "Cannot GET /api/sentiment/getData"        | Run `npm start` in Server folder                     |
| Port already in use | `Error: listen EADDRINUSE :::3001`         | Kill process on port 3001 or change PORT in .env     |
| CORS Error          | "Access to XMLHttpRequest blocked by CORS" | Ensure `FRONTEND_URL` matches client URL             |
| No articles found   | "No news articles found for this topic"    | Topic doesn't exist in NewsAPI or API limit reached  |
| Sentiment undefined | News cards show "BEARISH" but shouldn't    | Check if `rawData.sentimentData` exists in response  |
| Old data showing    | Still seeing previous search results       | Check if state reset is working in `handleGetData()` |

---

## 📱 Where Data Appears (After Fix)

When you search for "NVIDIA":

1. **Gauge (Left)** - Shows sentiment score (0-100)
2. **Chart (Right)** - Shows distribution (Bullish/Neutral/Bearish %)
3. **News Feed (Right Column)** - Shows first 5 articles sorted by date
4. **AI Summary** - Shows collective market insight
5. **Hot Topics** - Shows key financial terms mentioned

---

## 🔍 Logging Added

To help debug future issues, console logs now show:

```javascript
// In handleGetData():
console.log("Fetching from:", endpoint);
console.log("Response received:", response.data);
console.log("Processed data:", data);
```

Check console (F12) to verify data is flowing correctly.

---

## 💡 Key Logic to Understand

### News Processing

1. Fetch 20 articles from NewsAPI
2. Take first 5 (most recent)
3. Calculate sentiment for each
4. Map sentiment onto news objects
5. Sort by date (newest first)

### Sentiment Score Calculation

- Based on articles in `seenNews` list
- Uses weighted scoring: important keywords (Fed, Oil, War) = 3x weight
- Recent articles (< 4 hours) = 2x weight
- Formula: `((weightedAvg + 1) * 50)` → converts -1 to +1 range to 0-100

### State Flow

```
handleGetData(topic)
    ↓
updateStateWithData(articles, aiInsight)
    ↓
Set: newNews, seenNews, sentimentData, distribution, AIinsight
    ↓
Dashboard re-renders with new data
```

---

## 🚀 Next Steps to Improve

1. **Add loading skeleton** - Already has `<SentimentChartSkeleton/>` ✓
2. **Cache search results** - Uncomment localStorage logic when needed
3. **Add retry logic** - Auto-retry failed API calls
4. **Pagination** - Show more articles when scrolling
5. **Real-time updates** - Use WebSocket for live sentiment
