# 🧪 Step-by-Step Testing Guide

## Pre-Test Checklist

- [ ] All fixes applied from CODE_CHANGES.md
- [ ] API keys in Server/.env are valid
- [ ] Node modules installed: `npm install` in both Server and Client
- [ ] Ports 3001 and 5173 are free
- [ ] Internet connection active (for NewsAPI)

---

## Test Sequence

### PHASE 1: Server Verification

#### Step 1.1: Start Server

```bash
cd Server
npm start
```

**Expected Output:**

```
app is running at  http://localhost:3001/
```

✅ **Pass:** Server started with no errors
❌ **Fail:** Check error message, likely:

- Port 3001 in use: Change PORT in .env
- Missing dependencies: Run `npm install`
- Invalid API keys: Check Gemini_API_Key in .env

---

#### Step 1.2: Test Server Health

Open a new terminal:

```bash
curl http://localhost:3001/
```

**Expected Response:**

```
app is running smoothly at port 3001
```

✅ **Pass:** Server is responding
❌ **Fail:** Server crashed or not listening

---

#### Step 1.3: Test API Endpoint

```bash
curl -X POST http://localhost:3001/api/sentiment/getData \
  -H "Content-Type: application/json" \
  -d '{"topic":"tesla"}'
```

**Expected Response (partial):**

```json
{
  "status": true,
  "newsData": [
    {
      "source": "Reuters",
      "title": "Tesla stock rises on earnings...",
      "description": "...",
      "url": "...",
      "publishedAt": "2026-04-20T..."
    }
    // 4 more articles
  ],
  "rawData": {
    "sentimentData": [
      {"index": 0, "sentiment": 0.75},
      {"index": 1, "sentiment": -0.2},
      // 3 more
    ],
    "aditionAIDATA": {
      "insight": "Market sentiment is strongly bullish...",
      "signalStrength": "Strong Buy",
      "topTopics": ["earnings", "growth", "bullish", ...]
    }
  }
}
```

✅ **Pass:** Response structure is correct
❌ **Fail:**

- If error response: Check server logs for details
- If "No articles": Topic doesn't exist in NewsAPI
- If timeout: API keys not working

---

### PHASE 2: Client Verification

#### Step 2.1: Start Client

Open another terminal:

```bash
cd Client
npm run dev
```

**Expected Output:**

```
VITE v8.0.4  ready in XXX ms

➜  Local:   http://localhost:5173/
```

✅ **Pass:** Client started
❌ **Fail:** Check for build errors, likely missing dependencies

---

#### Step 2.2: Open Browser

Navigate to: `http://localhost:5173/`

**Expected:**

- Black themed UI with "SENTI-TRADE.AI" header
- Search box in top right
- Gauge on left (spinning while loading, or showing 50 by default)
- News panel on right (empty)
- AI Summary box (bottom)

✅ **Pass:** UI renders correctly
❌ **Fail:**

- Check browser console (F12) for errors
- Check client terminal for build errors

---

### PHASE 3: Search Functionality

#### Step 3.1: Perform Search

1. Type: **"nvidia"** (or any stock)
2. Click search button or press Enter
3. Open DevTools (F12) → Console tab

**Expected Console Logs:**

```
Fetching from: http://localhost:3001/api/sentiment/getData
Response received: {status: true, newsData: Array(5), rawData: {...}}
Processed data: Array(5)
```

✅ **Pass:** Logs appear immediately
❌ **Fail:**

- If `404` error: Server endpoint wrong or not running
- If `CORS error`: FRONTEND_URL in Server/.env doesn't match
- If `undefined` response: API returned error

---

#### Step 3.2: Verify UI Updates

After ~2-3 seconds, check for:

1. **Gauge (Left Panel)**
   - Should stop spinning
   - Should show number between 0-100
   - Should show "NVIDIA" label

✅ **Pass:** Gauge shows sentiment score
❌ **Fail:** Stays at 0 or keeps spinning → check console logs

2. **Chart (Right of Gauge)**
   - Should show pie chart with 3 colors
   - Segments for: Bullish (green), Neutral (gray), Bearish (red)

✅ **Pass:** Chart displays
❌ **Fail:** Still says "Standby Mode" → sentiment data not set

3. **News List (Right Panel)**
   - Should show 5 news cards
   - Each card shows: source, title, timestamp
   - Top card shows "NEW" badge in cyan

✅ **Pass:** News cards appear
❌ **Fail:** Empty list → newsData not being set

4. **Cards Detail Check**
   - Green border → positive sentiment (Bullish)
   - Red border → negative sentiment (Bearish)
   - Text says "BULLISH" or "BEARISH"

✅ **Pass:** Sentiment applied correctly
❌ **Fail:** All say "BEARISH" → sentiment mapping failed

5. **AI Summary Box (Bottom)**
   - Should show market insight text
   - Not "Analyzing....." anymore

✅ **Pass:** AI insight displayed
❌ **Fail:** Still says "Analyzing....." or "to get better insight..." → AI data not set

6. **Hot Topics (Bottom Right)**
   - Should show tagged keywords
   - E.g., #earnings #growth #bullish

✅ **Pass:** Topics displayed
❌ **Fail:** Not showing → hotTopic array not populated

---

#### Step 3.3: Test Different Searches

Try these:

1. **Valid Stock:** "Apple"
   - Should work
   - ✅ Expected: News and sentiment appear

2. **Valid Stock:** "Tesla"
   - Should work
   - ✅ Expected: Different data than before

3. **Generic Term:** "artificial intelligence"
   - Should work (not a stock but has news)
   - ✅ Expected: Tech-related articles

4. **Invalid:** "XYZ123NOTREAL"
   - Should fail gracefully
   - ✅ Expected: Red error banner with message
   - Message should say: "No news articles found for this topic"

5. **Empty Search:** Click search with blank input
   - Should do nothing
   - ✅ Expected: No error, no request made

---

#### Step 3.4: Test Error Handling

**Scenario A: Network Error**

```bash
# While client is running, stop the server:
Ctrl+C  # in Server terminal
```

- Try new search
- ✅ Expected: Red error banner appears
- Message: "Failed to fetch data: connect ECONNREFUSED"

**Scenario B: Invalid API Key**

- Edit Server/.env: Change `Gemini_API_Key` to invalid value
- Restart server: `npm start`
- Try search
- ✅ Expected: Might still work if local sentiment kicks in
- Should see console: "data from getsentimentUtil : local - {...}"

---

### PHASE 4: State Management

#### Step 4.1: Multiple Searches

1. Search: "Apple"
2. Wait for results
3. Check gauge shows Apple sentiment
4. Search: "Microsoft"
5. Wait for results

✅ **Pass:**

- Gauge updates to new value
- News list shows Microsoft articles
- Old Apple data completely gone
- No stale data showing

❌ **Fail:**

- Gauge keeps old value briefly
- Old news cards visible temporarily
- Sentiment doesn't recalculate

---

#### Step 4.2: Auto-Scroll Test

After successful search:

1. Watch news cards for 10 seconds
2. Top card should move to list below
3. Position 2 becomes position 1

✅ **Pass:** Cards shift every 10 seconds
❌ **Fail:** Cards don't move → shiftNewsToSeen not working

---

### PHASE 5: Data Validation

#### Step 5.1: Check Response Structure

In DevTools → Network tab:

1. Search for a topic
2. Look for request to `/api/sentiment/getData`
3. Click it → Preview tab
4. Verify structure is:

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

✅ **Pass:** No extra fields, clean structure
❌ **Fail:** Has `data`, `AI_insight` fields (old format)

---

#### Step 5.2: Check Sentiment Values

In Console:

```javascript
// After search, paste this:
// From context:
// const { sentimentData } = useUser();
// sentimentData should have:
// { score: 45.3, weight: 2.5 }

// Score should be 0-100
// Weight should be positive number
```

✅ **Pass:** Score between 0-100, weight > 0
❌ **Fail:** Score is 0, weight is 0 → calculation failed

---

### PHASE 6: Performance Check

#### Step 6.1: Response Time

1. Open DevTools → Network tab
2. Search for topic
3. Check request time:
   - `/api/sentiment/getData` should take: 2-5 seconds
   - (Depends on internet, API responsiveness)

✅ **Pass:** 2-5 seconds
⚠️ **Slow:** > 5 seconds - API slow or rate limited
❌ **Fail:** Never responds - server crashed

---

#### Step 6.2: Memory Check

1. Open DevTools → Performance tab
2. Record 5 seconds while doing search
3. Check for:
   - No memory spike
   - No console errors
   - Smooth animations

✅ **Pass:** Clean performance
❌ **Fail:** Spike in memory → possible memory leak

---

## Summary Score

| Category       | Status | Points  |
| -------------- | ------ | ------- |
| Server health  | ✅     | 20      |
| API endpoint   | ✅     | 20      |
| Client renders | ✅     | 10      |
| Search works   | ✅     | 15      |
| Error display  | ✅     | 10      |
| Data updates   | ✅     | 10      |
| State reset    | ✅     | 10      |
| Performance    | ✅     | 5       |
| **TOTAL**      | **✅** | **100** |

---

## Troubleshooting Quick Reference

| Symptom                              | Likely Cause               | Fix                                   |
| ------------------------------------ | -------------------------- | ------------------------------------- |
| "Cannot POST /api/sentiment/getData" | Server not running         | `npm start` in Server folder          |
| CORS error                           | Wrong FRONTEND_URL         | Update Server/.env                    |
| No response from API                 | API key invalid            | Check News_API_Key and Gemini_API_Key |
| Gauge shows 0                        | sentimentData not set      | Check console for errors              |
| Chart not showing                    | distributionData undefined | Verify calculation logic              |
| Old news visible                     | State not reset            | Verify handleGetData clears state     |
| Error not showing                    | setError not exported      | Check Context Provider                |
| "No articles found"                  | Topic unknown              | Try popular stock: "Tesla"            |
| Infinite loading                     | API hanging                | Check API key quota limits            |

---

## Final Verification Command

Once everything works, you should be able to run this shell script successfully:

```bash
#!/bin/bash
echo "Testing Senti-Trade.ai..."

# Test 1: Server running
echo "1. Testing server health..."
curl -s http://localhost:3001/ | grep -q "app is running" && echo "✅ Server OK" || echo "❌ Server Failed"

# Test 2: API responds
echo "2. Testing API endpoint..."
curl -s -X POST http://localhost:3001/api/sentiment/getData \
  -H "Content-Type: application/json" \
  -d '{"topic":"apple"}' | grep -q '"status":true' && echo "✅ API OK" || echo "❌ API Failed"

# Test 3: Client responding
echo "3. Testing client..."
curl -s http://localhost:5173/ | grep -q "SENTI-TRADE" && echo "✅ Client OK" || echo "❌ Client Failed"

echo "Done!"
```

Run it and all three should show ✅
