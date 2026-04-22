const simplifiedData = [
  {
    source: "The Times of India",
    title: "Fermi stock drops sharply after CEO and CFO departures",
    description:
      "U.S. power startup Fermi's shares plummeted 23% after CEO Toby Neugebauer and CFO Miles Everson abruptly departed. Short seller Fuzzy Panda Research alleged fraudulent transfers by Neugebauer and other executives. Despite leadership changes, the company reite…",
    url: "https://economictimes.indiatimes.com/markets/us-stocks/news/fermi-stock-drops-sharply-after-ceo-and-cfo-departures/articleshow/130400111.cms",
    publishedAt: "2026-04-20T17:54:54Z",
  },
  {
    source: "The Times of India",
    title:
      "BSE launches Housing Finance Index to track sectoral opportunities, enable passive investing",
    description:
      "BSE Index Services introduced the Housing Finance Index to measure housing finance companies’ performance. Drawn from BSE 1000, it supports ETFs, mutual funds, PMS strategies, and sector-specific tracking. LIC Housing Finance holds the highest weight, while A…",
    url: "https://economictimes.indiatimes.com/markets/stocks/news/bse-launches-housing-finance-index-to-track-sectoral-opportunities-enable-passive-investing/articleshow/130397312.cms",
    publishedAt: "2026-04-20T16:13:54Z",
  },
  {
    source: "The Times of India",
    title:
      "PNB Housing Finance Q4 profit surges 19% to Rs 656 crore with strong retail growth",
    description:
      "PNB Housing Finance reported a 19% rise in Q4 net profit to Rs 656 crore. FY26 profit grew 18% to Rs 2,291 crore. The company proposed Rs 8 per share dividend while its assets under management expanded 13% to Rs 90,921 crore with strong retail loan growth.",
    url: "https://economictimes.indiatimes.com/markets/stocks/earnings/pnb-housing-finance-q4-profit-surges-19-to-rs-656-crore-with-strong-retail-growth/articleshow/130397271.cms",
    publishedAt: "2026-04-20T16:10:33Z",
  },
  {
    source: "The Times of India",
    title: "India Inc borrowed $4.6 billion from overseas markets in February",
    description:
      "Indian corporates raised $4.60 billion in ECB in February, 14% lower than January. Over 100 firms borrowed $4.20 billion via the automatic route, while Piramal Finance took $400 million via approval. ABC Cleantech led with $595 million.",
    url: "https://economictimes.indiatimes.com/markets/stocks/news/india-inc-borrowed-4-6-billion-from-overseas-markets-in-february/articleshow/130397195.cms",
    publishedAt: "2026-04-20T16:07:37Z",
  },
  {
    source: "BusinessLine",
    title:
      "Q4 Results Highlights: BoM & Groww Q4 profit soar, Navkar Corporation turns profitable, PNB Housing, Nelco, Indosolar, Indbank Merchant to announce Q4, ICICI & HDFC Bank stocks end flat, Yes Bank shares down",
    description:
      "Q4 Results Today, 20th April 2026 Updates: Find all the latest Q4 results 2026 updates of Axita Cotton Ltd, Binny Ltd, Billionbrains Garage Ventures Ltd, Indbank Merchant Banking Services Ltd, Jupiter Infomedia Ltd, Bank of Maharashtra, Navkar Corporation Ltd…",
    url: "https://www.thehindubusinessline.com/markets/q4-results-today-highlights-groww-pnb-housing-sml-mahindra-bank-of-maharashtra-hdfc-icici-yes-bank-jio-financial-mastek-results-20-april-2026/article70877275.ece",
    publishedAt: "2026-04-20T15:56:23Z",
  },
  {
    source: "The Times of India",
    title:
      "Ahead of Market: 10 things that will decide stock market action on Tuesday",
    description:
      "Indian markets closed with modest gains led by SBI and ICICI Bank, as auto and energy sectors recovered; Nifty 50 up 0.05% at 24,364.85, Sensex up 0.03% at 78,520.30. India VIX rose 9.21% amid volatility. US and European markets mixed on geopolitical tensions.",
    url: "https://economictimes.indiatimes.com/markets/stocks/news/ahead-of-market-10-things-that-will-decide-stock-market-action-on-tuesday/articleshow/130396881.cms",
    publishedAt: "2026-04-20T15:47:44Z",
  },
  {
    source: "Boston Herald",
    title: "Oil prices jump, Wall Street slides amid Strait of Hormuz clash",
    description:
      "Oil prices jump, Wall Street slides amid Strait of Hormuz clashbostonherald.com",
    url: "https://www.bostonherald.com/2026/04/20/oil-prices-wall-street-strait-of-hormuz/",
    publishedAt: "2026-04-20T13:16:35Z",
  },
  {
    source: "Economictimes.com",
    title:
      "Cummins India among 7 stocks that hit 52-week high; rally up to 32% in a month",
    description:
      "On Monday, the benchmark Sensex edged up by 27 points to settle at 78,520. The broader market posted modest gains, with seven stocks from the BSE 100 index touching their 52-week highs—marking their strongest performance over the past year. Such levels are ty…",
    url: "https://m.economictimes.com/markets/stocks/news/cummins-india-among-7-stocks-that-hit-52-week-high-rally-up-to-32-in-a-month/bullish-breakout/slideshow/130393480.cms",
    publishedAt: "2026-04-20T13:02:06Z",
  },
  {
    source: "CNA",
    title:
      "Oil prices jump and Wall Street slides with US, Iran clashing in the Strait of Hormuz",
    description:
      "Since the start of the Iran war, US market sentiments have swung wildly, with a start to the earnings reporting season for big US companies helping to support stocks.",
    url: "https://www.channelnewsasia.com/world/oil-prices-wall-street-us-iran-war-strait-hormuz-6068226",
    publishedAt: "2026-04-20T12:15:26Z",
  },
  {
    source: "Economictimes.com",
    title: "Gainers & Losers: Trent and Yes Bank among 7 big movers on Monday",
    description:
      "Markets ended flat, but action was stock-specific, with Trent, Adani Power, Deccan Gold Mines and IEX among the top movers, while Lenskart and Yes Bank saw pressure amid mixed sector cues.",
    url: "https://m.economictimes.com/markets/web-stories/gainers-amp-losers-trent-and-yes-bank-among-7-big-movers-on-monday/slideshow/130391968.cms",
    publishedAt: "2026-04-20T12:05:58Z",
  },
  {
    source: "The Times of India",
    title:
      "BPTP to invest Rs 1,100 cr to build luxury homes in Haryana's Faridabad",
    description:
      "Realty firm BPTP Ltd will invest around Rs 1,100 crore to develop a luxury housing project in Faridabad as part of its expansion plan.",
    url: "https://economictimes.indiatimes.com/markets/digital-real-estate/realty-news/bptp-to-invest-rs-1100-cr-to-build-luxury-homes-in-haryanas-faridabad/articleshow/130391845.cms",
    publishedAt: "2026-04-20T12:02:33Z",
  },
  {
    source: "BusinessLine",
    title:
      "Nifty holds 24,300, but bulls struggle to break past 24,500 resistance",
    description:
      "Nifty holds 24,300 amid consolidation, as bulls struggle to breach 24,500 resistance despite marginal gains in equity benchmarks.",
    url: "https://www.thehindubusinessline.com/markets/nifty-holds-24300-but-bulls-struggle-to-break-past-24500-resistance/article70884229.ece",
    publishedAt: "2026-04-20T11:04:02Z",
  },
  {
    source: "BusinessLine",
    title: "Rupee falls 19 paise to settle at 93.10 against US dollar",
    description:
      "Forex traders say rupee remained under pressure due to a fresh standoff between the US and Iran that led to a closure of the Strait of Hormuz, disrupting global supply",
    url: "https://www.thehindubusinessline.com/markets/forex/rupee-falls-19-paise-to-settle-at-9310-against-us-dollar/article70884139.ece",
    publishedAt: "2026-04-20T10:33:26Z",
  },
  {
    source: "Moneycontrol",
    title:
      "Sensex-Nifty फ्लैट बंद, उठा-पटक के बीच निवेशकों ने गंवाए ₹71 हजार करोड़",
    description:
      "Sensex-Nifty Closes Flat Green: अमेरिका और ईरान के बीच होने वाली दूसरे दौर की शांति वार्ता से पहले आज मार्केट में काफी उठा-पटक रही। हालांकि अमेरिकी नेवी की होर्मुज से बारूदी सुरंगें हटाने के लिए रोबोट भेजने की पहल ने मार्केट पर दबाव बनाया तो शांति वार्ता ने म…",
    url: "https://hindi.moneycontrol.com/news/markets/sensex-nifty-closes-flat-investors-gains-over-71-thousand-crore-rupees-smallcap-midcap-trent-asian-paints-sbi-top-gainer-lt-bel-top-loser-2393641.html",
    publishedAt: "2026-04-20T10:15:18Z",
  },
  {
    source: "The Times of India",
    title:
      "Buy every dip, markets have turned a corner; 2 trading calls for near-term gains: CA Rudramurthy BV",
    description:
      "India's stock market shows a fundamental shift, with analysts advising investors to buy on dips as negative news is now ignored. The Nifty is projected to reach 24,800-25,000, driven by strong sector performance and returning FII buying. Traders are also pres…",
    url: "https://economictimes.indiatimes.com/markets/expert-view/buy-every-dip-markets-have-turned-a-corner-2-trading-calls-for-near-term-gains-ca-rudramurthy-bv/articleshow/130389187.cms",
    publishedAt: "2026-04-20T10:10:36Z",
  },
  {
    source: "The Times of India",
    title:
      "Indian market faces AI narrative problem; it'll be smallcaps over largecaps for next 5 years: Manish Gunwani",
    description:
      "Indian stock market valuations are attractive. However, global investor focus on Artificial Intelligence is diverting capital away from emerging markets like India. Foreign institutional investor flows are expected to remain subdued unless the AI theme slows …",
    url: "https://economictimes.indiatimes.com/markets/expert-view/indian-market-faces-ai-narrative-problem-itll-be-smallcaps-over-largecaps-for-next-5-years-manish-gunwani/articleshow/130387635.cms",
    publishedAt: "2026-04-20T09:01:04Z",
  },
  {
    source: "Abcnews.com",
    title:
      "Oil prices jump and stocks are mixed as the US-Iran standoff keeps the Strait of Hormuz in limbo",
    description:
      "Oil prices have climbed more than 5% while shares are mixed as a standoff between Iran and the U.S. prevents tankers from using the Strait of Hormuz",
    url: "https://abcnews.com/US/wireStory/oil-prices-jump-stocks-mixed-us-iran-standoff-132194793",
    publishedAt: "2026-04-20T08:56:10Z",
  },
  {
    source: "The Times of India",
    title:
      "Why is stock market rising today? Sensex jumps 400 points, Nifty above 24,450. 5 key factors explained",
    description:
      "Indian markets reversed early losses to trade higher, supported by a stronger rupee, continued FII buying and oil prices staying below $100 per barrel. Benchmark indices Sensex and Nifty gained around 0.5%, while broader markets also moved into positive terri…",
    url: "https://economictimes.indiatimes.com/markets/stocks/news/why-is-stock-market-rising-today-sensex-jumps-400-points-nifty-above-24450-5-key-factors-explained/articleshow/130385841.cms",
    publishedAt: "2026-04-20T07:33:18Z",
  },
  {
    source: "BusinessLine",
    title:
      "Markets reverse early losses, Sensex climbs 377 points by midday; SBI, Trent lead gains",
    description:
      "Markets rebound from early losses as Sensex rises 377 points, with SBI and Trent leading the gains amid global uncertainty.",
    url: "https://www.thehindubusinessline.com/markets/stock-markets/markets-reverse-early-losses-sensex-climbs-377-points-by-midday-sbi-trent-lead-gains/article70883550.ece",
    publishedAt: "2026-04-20T07:11:26Z",
  },
  {
    source: "The Times of India",
    title:
      "Gujarati travellers cut back on travel plans amid geopolitical uncertainty, expected market volatility",
    description:
      "Gujarati travelers are pausing travel plans. Uncertainty from the US-Israel-Iran conflict and stock market dips are causing caution. Advance bookings for summer trips are down significantly. Many are considering alternative destinations. This trend is impacti…",
    url: "https://economictimes.indiatimes.com/nri/visit/gujarati-travellers-cut-back-on-travel-plans-amid-geopolitical-uncertainty-expected-market-volatility/articleshow/130383806.cms",
    publishedAt: "2026-04-20T05:59:13Z",
  },
  {
    source: "The Times of India",
    title:
      "Sector rotation underway: 3 themes to watch for your portfolio, says Devang Mehta",
    description:
      "India's stock markets are experiencing a sector rotation, with consumption stocks like tobacco and alcobev surging after years of quiet. Investors who missed the recent Nifty rally are advised to focus on three key themes: financialization of savings, capital…",
    url: "https://economictimes.indiatimes.com/markets/expert-view/sector-rotation-underway-3-themes-to-watch-for-your-portfolio-says-devang-mehta/articleshow/130382974.cms",
    publishedAt: "2026-04-20T05:07:42Z",
  },
  {
    source: "The Times of India",
    title:
      "Reliance Industries to declare dividend this week: Here's how Mukesh Ambani-led company rewarded its 42 lakh shareholders so far",
    description:
      "Reliance Industries Limited will consider a dividend this week alongside its Q4 FY26 results. The Mukesh Ambani-led firm has a long dividend track record, rewarding over 42 lakh shareholders, even as investors watch earnings closely amid volatile oil prices a…",
    url: "https://economictimes.indiatimes.com/markets/stocks/news/reliance-industries-to-declare-dividend-this-week-heres-how-mukesh-ambani-led-company-rewarded-its-42-lakh-shareholders-so-far/articleshow/130382783.cms",
    publishedAt: "2026-04-20T04:51:33Z",
  },
  {
    source: "BusinessLine",
    title: "Rupee rises 13 paise to 92.78 against US dollar in early trade",
    description:
      "At the interbank foreign exchange market, the rupee opened at 92.73 and moved up to 92.70 level before trading at 92.78 against the greenback in early deals, up 13 paise from the previous closing level",
    url: "https://www.thehindubusinessline.com/markets/forex/rupee-rises-13-paise-to-9278-against-us-dollar-in-early-trade/article70883155.ece",
    publishedAt: "2026-04-20T04:28:28Z",
  },
  {
    source: "The Indian Express",
    title:
      "Sensex falls 0.06%, Nifty 50 down by 0.13% as Iran ceasefire uncertainty offsets earnings optimism",
    description:
      "The price of Brent crude ‌rose to $97 ​a ​barrel with minimum transit of ​ships through the Strait of Hormuz, even as the traders were hopeful for a resolution to the war.",
    url: "https://indianexpress.com/article/business/indian-shares-change-little-as-iran-ceasefire-uncertainty-offsets-earnings-optimism-10645822/",
    publishedAt: "2026-04-20T04:13:26Z",
  },
  {
    source: "The Times of India",
    title:
      "Sensex drops over 150 pts, Nifty below 24,300 as Iran-US war escalations spook investors. What lies ahead?",
    description:
      "Indian stock markets opened higher but quickly turned negative. Rising tensions between Iran and the US impacted sentiment and increased oil prices. Major indices like Sensex and Nifty saw declines. Some banking and metal stocks faced losses. However, certain…",
    url: "https://economictimes.indiatimes.com/markets/stocks/news/sensex-drops-over-150-pts-nifty-below-24300-as-iran-us-war-escalations-spook-investors-what-lies-ahead/articleshow/130381954.cms",
    publishedAt: "2026-04-20T04:01:12Z",
  },
  {
    source: "BusinessLine",
    title:
      "Nifty slips below 24,300 at open as Iran tensions, crude spike rattle investors",
    description:
      "The sell-off comes after Iran hardened its position over the weekend, with the Strait of Hormuz reported closed again after briefly reopening on Friday",
    url: "https://www.thehindubusinessline.com/markets/stock-markets/nifty-slips-below-24300-at-open-as-iran-tensions-crude-spike-rattle-investors/article70883124.ece",
    publishedAt: "2026-04-20T03:57:35Z",
  },
  {
    source: "The Times of India",
    title:
      "Global Markets | Japan's Nikkei climbs as AI optimism outweighs Mideast concerns",
    description:
      "Japanese stocks surged Monday, nearing a historic peak, fueled by booming AI sector enthusiasm that overshadowed Middle East tensions.  Major US indices hitting records and strong corporate earnings also bolstered investor confidence.  Tech giants like SoftBa…",
    url: "https://economictimes.indiatimes.com/markets/us-stocks/news/global-markets-japans-nikkei-climbs-as-ai-optimism-outweighs-mideast-concerns/articleshow/130381814.cms",
    publishedAt: "2026-04-20T03:39:57Z",
  },
  {
    source: "Moneycontrol",
    title:
      "Stocks to Watch: HDFC Bank, Yes Bank, Trent और Cipla समेत ये स्टॉक्स; खास वजहों से होगी हफ्ते की धमाकेदार शुरुआत!",
    description:
      "Stocks to Watch: होर्मुज जलडमरूमध्य के खुलने को लेकर अनिश्चितता और अमेरिका-ईरान के बीच अगले दौर की बातचीत से पहले मार्केट में रौनक फीकी है। दुनिया के अधिकतकर बाजारों से मजबूत रुझानों के बीच गिफ्ट निफ्टी से आज घरेलू स्टॉक मार्केट में सुस्त शुरुआत के संकेत मिल …",
    url: "https://hindi.moneycontrol.com/news/markets/stocks-to-watch-today-hdfc-bank-ems-icici-bank-cipla-aurobindo-pharma-bharat-wire-ropes-lupin-lemon-tree-hotels-in-focus-on-20-april-sensex-nifty-iran-us-war-crude-oil-2393455.html",
    publishedAt: "2026-04-20T03:22:16Z",
  },
  {
    source: "Economictimes.com",
    title:
      "Sensex Today | Nifty 50 | Stock Market Live Updates: GIFT Nifty signals a positive start; Asian shares trade mixed",
    description:
      "Sensex Today | Nifty 50 | Stock Market Live Updates: Markets closed last week on a strong note, with the Nifty rising 0.7% on Friday and ending the week up 1.3%. After a sharp 10% surge over the past ten trading sessions, Indian equities are expected to conso…",
    url: "https://m.economictimes.com/markets/stocks/live-blog/bse-sensex-today-nifty50-stock-market-live-updates-gift-nifty-hdfc-bank-icici-bank-share-price-20-april-2026/liveblog/130380502.cms",
    publishedAt: "2026-04-20T01:49:40Z",
  },
  {
    source: "BusinessLine",
    title: "Stock Market Live: Stock to buy today: KFin Technologies",
    description:
      "Sensex, Nifty, Share Prices LIVE: The stock of KFin Technologies has been charting a sideways trend since the beginning of March. It has largely been oscillating between ₹870 and ₹950. On Friday, the stock decisively broke out of the resistance at ₹950. Prior…",
    url: "https://www.thehindubusinessline.com/markets/stock-market-nifty-sensex-live-updates-20th-april-2026/article70880512.ece",
    publishedAt: "2026-04-20T01:05:31Z",
  },
  {
    source: "The Times of India",
    title: "Pre-market action: Here's the trade setup for today's session",
    description:
      "Indian equities are poised for consolidation at higher levels after a significant 10% rally. Investors are closely watching the US-Iran peace talks, with a ceasefire deadline approaching. The Nifty closed positively, gaining 1.3% for the week, while the India…",
    url: "https://economictimes.indiatimes.com/markets/stocks/news/pre-market-action-heres-the-trade-setup-for-todays-session/articleshow/130380236.cms",
    publishedAt: "2026-04-20T00:56:02Z",
  },
  {
    source: "The Times of India",
    title: "Market, rupee fortunes may prove fickle amid Iran flareup",
    description:
      "Markets brace for renewed turmoil as Iran closes the Strait of Hormuz, sending oil prices soaring. This sharp reversal follows Friday's optimism after the maritime channel's opening. Stocks and the rupee face challenges, with the rupee expected to weaken agai…",
    url: "https://economictimes.indiatimes.com/markets/stocks/news/market-rupee-fortunes-may-prove-fickle-amid-iran-flareup/articleshow/130380153.cms",
    publishedAt: "2026-04-20T00:37:54Z",
  },
  {
    source: "The Times of India",
    title:
      "AT-1 case: Yes Bank does not expect material financial impact from Supreme Court ruling",
    description:
      "The Supreme Court has officially concluded the hearings related to the Additional Tier-1 bond write-down of Yes Bank, with a verdict now on the horizon. This case follows the bank's dramatic near-collapse back in 2020, leading to an aggressive write-down of ₹…",
    url: "https://economictimes.indiatimes.com/industry/banking/finance/banking/at-1-case-yes-bank-does-not-expect-material-financial-impact-from-supreme-court-ruling/articleshow/130380006.cms",
    publishedAt: "2026-04-19T19:07:41Z",
  },
  {
    source: "Aajtak.in",
    title: "TATA से RIL तक, बाजार की 'हीरो' रहीं ये 8 कंपनियां, तगड़ी कमाई",
    description:
      "Bharti Airtel ने बीते सप्ताह अपने निवेशकों को तगड़ी कमाई कराई और शेयर बाजार में तेजी के बीच चार दिन में ही उन्होंने करीब 59 हजार करोड़ रुपये छाप डाले.",
    url: "https://www.aajtak.in/business/news/story/tata-reliance-to-airtel-sensex-top-10-firms-market-cap-surge-last-week-tutc-dskc-2527613-2026-04-19",
    publishedAt: "2026-04-19T09:56:12Z",
  },
  {
    source: "The Times of India",
    title:
      "US-Iran war: Tehran doubles down on closing the Strait of Hormuz as the ceasefire nears expiration",
    description:
      "US-Israel war with Iran: Tehran is maintaining its blockade of the Strait of Hormuz. This action continues as long as the United States maintains its blockade of Iranian ports. Mediators are working to extend a ceasefire between the two nations. Tensions rema…",
    url: "https://economictimes.indiatimes.com/news/international/world-news/us-iran-war-tehran-doubles-down-on-closing-the-strait-of-hormuz-as-the-ceasefire-nears-expiration/articleshow/130367502.cms",
    publishedAt: "2026-04-19T09:42:30Z",
  },
  {
    source: "BusinessLine",
    title:
      "Developments in US-Iran conflict, oil prices, Q4 earnings to drive markets this week: Analysts",
    description:
      "The country's largest private-sector lender, HDFC Bank, on Saturday reported an 8.04 per cent jump in March quarter consolidated net profit to ₹20,350.76 crore, but flagged near-term risks from the West Asia conflict for a segment of small-business borrowers",
    url: "https://www.thehindubusinessline.com/markets/developments-in-us-iran-conflict-oil-prices-q4-earnings-to-drive-markets-this-week-analysts/article70880442.ece",
    publishedAt: "2026-04-19T09:23:08Z",
  },
  {
    source: "BusinessLine",
    title:
      "Mcap of 8 of top-10 most valued firms surges by ₹1.87 lakh cr; Airtel biggest winner",
    description:
      "The market valuation of Bharti Airtel jumped ₹58,831.52 crore to ₹11,25,125.21 crore, the most among the top-10 firms.",
    url: "https://www.thehindubusinessline.com/markets/mcap-of-8-of-top-10-most-valued-firms-surges-by-187-lakh-cr-airtel-biggest-winner/article70880352.ece",
    publishedAt: "2026-04-19T08:24:37Z",
  },
  {
    source: "The Times of India",
    title:
      "Mcap of 8 of top-10 most valued firms surges by Rs 1.87 lakh cr; Airtel biggest winner",
    description:
      "The combined market valuation of eight of the top-10 most valued firms surged by Rs 1,87,497.45 crore in a holiday-shortened last week, with Bharti Airtel emerging as the biggest gainer, in line with a positive trend in equities.",
    url: "https://economictimes.indiatimes.com/markets/stocks/news/mcap-of-8-of-top-10-most-valued-firms-surges-by-rs-1-87-lakh-cr-airtel-biggest-winner/articleshow/130366798.cms",
    publishedAt: "2026-04-19T07:56:08Z",
  },
  {
    source: "The Times of India",
    title:
      "Ahead of Market: 10 things that will decide stock market action on Monday",
    description:
      "Indian equities ended higher, led by consumer and metal stocks, while IT lagged due to weak earnings. Nifty and Sensex posted gains with positive market breadth. Analysts remain constructive, recommending a buy-on-dips approach as momentum holds, with key res…",
    url: "https://economictimes.indiatimes.com/markets/stocks/news/ahead-of-market-10-things-that-will-decide-stock-market-action-on-monday/articleshow/130366454.cms",
    publishedAt: "2026-04-19T07:23:37Z",
  },
  {
    source: "Economictimes.com",
    title:
      "10 Sensex stocks with up to 45% upside potential. Are these in your portfolio?",
    description:
      "Analyst predictions often offer more than just numbers; they reveal where the next wave of market opportunity could emerge. For investors scanning the Sensex for potential outperformers, the latest analyst consensus highlights several heavyweight names that c…",
    url: "https://m.economictimes.com/markets/stocks/news/10-sensex-stocks-with-up-to-45-upside-potential-are-these-in-your-portfolio/upside-potential/slideshow/130365935.cms",
    publishedAt: "2026-04-19T06:16:14Z",
  },
  {
    source: "The Times of India",
    title:
      "Aluminium prices at record highs: What’s driving the rally and what’s next?",
    description:
      "Aluminium prices have surged to multi-year highs, driven by strong demand, supply constraints, and rising energy costs. Geopolitical tensions and declining inventories have added volatility and a risk premium. With China’s demand robust and supply tight, the …",
    url: "https://economictimes.indiatimes.com/markets/stocks/news/aluminium-prices-at-record-highs-whats-driving-the-rally-and-whats-next/articleshow/130365487.cms",
    publishedAt: "2026-04-19T05:30:15Z",
  },
  {
    source: "The Times of India",
    title:
      "Can Sensex, Nifty extend gains on Monday? Oil prices, 5 factors to guide Dalal Street this week",
    description:
      "Indian stock markets are poised for a strong opening, extending Friday's gains as GIFT Nifty surged. Optimism surrounding a potential resolution to the Iran-US conflict and falling oil prices are boosting sentiment. Major bank earnings and a strengthening rup…",
    url: "https://economictimes.indiatimes.com/markets/stocks/news/can-sensex-nifty-extend-gains-on-monday-oil-prices-5-factors-to-guide-dalal-street-this-week/articleshow/130364899.cms",
    publishedAt: "2026-04-19T04:10:13Z",
  },
  {
    source: "BusinessLine",
    title: "Index Outlook: High hopes",
    description:
      "Bullish outlook for Indian indices as Nifty, Sensex, and Bank index rise, with short-term dips expected to be temporary.",
    url: "https://www.thehindubusinessline.com/portfolio/technical-analysis/index-outlook-strength-building-up/article70876646.ece",
    publishedAt: "2026-04-18T16:10:05Z",
  },
  {
    source: "Dtnext.in",
    title:
      "Sensex, Nifty close on strong note this week over US-Iran peace talks",
    description:
      "The key gains were witnessed in Nifty FMCG, Metal, and Oil and Gas indices, which advanced in the range of 1 per cent to 3 per cent, while Nifty IT remained a laggard.",
    url: "https://www.dtnext.in/news/business/sensex-nifty-close-on-strong-note-this-week-over-us-iran-peace-talks",
    publishedAt: "2026-04-18T09:32:58Z",
  },
  {
    source: "The Times of India",
    title:
      "F&O Talk: Midcaps, smallcaps stage sharp comeback, trade above key moving averages. What's the outlook?",
    description:
      "Domestic markets closed higher on Friday, led by consumer and metal stocks, with Nifty and Sensex posting gains. Analyst Sudeep Shah of SBI Securities shared insights on Nifty and Bank Nifty's outlook, highlighting broader market strength and key levels to wa…",
    url: "https://economictimes.indiatimes.com/markets/expert-view/fo-talk-midcaps-smallcaps-stage-sharp-comeback-trade-above-key-moving-averages-whats-the-outlook/articleshow/130350496.cms",
    publishedAt: "2026-04-18T09:17:59Z",
  },
  {
    source: "Economictimes.com",
    title:
      "Concurrent Gainers: 15 small-cap stocks that gained for five straight days, rallying up to 40%",
    description:
      "In the five trading sessions ending April 17, the Sensex climbed 2.43%, gaining 1,862 points to close at 78,493, with advances in three of the five sessions between April 10 and 17. Over the same period, about 166 stocks in the BSE small-cap index posted gain…",
    url: "https://m.economictimes.com/markets/stocks/news/concurrent-gainers-15-small-cap-stocks-that-gained-for-five-straight-days-rallying-up-to-40/consistent-performers/slideshow/130348276.cms",
    publishedAt: "2026-04-18T06:08:48Z",
  },
  {
    source: "The Times of India",
    title:
      "Akshaya Tritiya: Tapan Patel on why you shouldn't let the recent dip in gold scare you",
    description:
      "Gold prices are experiencing a cyclical reset, not a structural shift. This presents a strategic opportunity for Indian investors to buy gold.  Akshaya Tritiya is an auspicious time to invest in gold ETFs, Digi Gold, or multi-asset funds.  Central banks may r…",
    url: "https://economictimes.indiatimes.com/markets/expert-view/akshaya-tritiya-tapan-patel-on-why-you-shouldnt-let-the-recent-dip-in-gold-scare-you/articleshow/130346907.cms",
    publishedAt: "2026-04-18T04:20:13Z",
  },
  {
    source: "The Times of India",
    title:
      "Berkshire CEO Abel sold stocks managed by ex-portfolio manager Combs, WSJ reports",
    description:
      "Berkshire Hathaway CEO Greg Abel has divested stocks once overseen by Todd Combs. Combs departed Berkshire in December for JPMorgan Chase. This move signals a significant shift in Berkshire's investment portfolio under Abel, who took over as CEO in January. W…",
    url: "https://economictimes.indiatimes.com/markets/us-stocks/news/berkshire-ceo-abel-sold-stocks-managed-by-ex-portfolio-manager-combs-wsj-reports/articleshow/130346726.cms",
    publishedAt: "2026-04-18T03:58:53Z",
  },
  {
    source: "The Times of India",
    title:
      "Bullish momentum continues, but analysts warn of near-term resistance",
    description:
      "Indian stock markets rallied for a second week, driven by hopes of peace in West Asia and a strengthening rupee.  Easing geopolitical tensions and falling oil prices boosted investor confidence, leading to gains across major indices.  While the market shows p…",
    url: "https://economictimes.indiatimes.com/markets/stocks/news/bullish-momentum-continues-but-analysts-warn-of-near-term-resistance/articleshow/130345908.cms",
    publishedAt: "2026-04-18T02:19:16Z",
  },
  {
    source: "The Times of India",
    title: "Even a Rs 15,000-crore buyback fails to cheer Wipro investors",
    description:
      "Wipro's stock fell on Friday after its March-quarter earnings missed expectations, with a ₹15,000 crore buyback failing to boost sentiment. The IT major reported a 2% decline in consolidated net profit, and brokerages expressed caution due to weaker-than-expe…",
    url: "https://economictimes.indiatimes.com/markets/stocks/news/even-a-rs-15000-crore-buyback-fails-to-cheer-wipro-investors/articleshow/130345806.cms",
    publishedAt: "2026-04-18T02:02:49Z",
  },
  {
    source: "The Times of India",
    title: "ICICI Direct view Nifty 'maturity' sets stage for a bull market",
    description:
      "The Nifty has reached a significant point of maturity. This suggests a strong bottom is in place. Analysts believe this sets the stage for the next phase of a bull market. The Nifty target has been revised upwards. Historically, major corrections have bottome…",
    url: "https://economictimes.indiatimes.com/markets/stocks/news/icici-direct-view-nifty-maturity-sets-stage-for-a-bull-market/articleshow/130345752.cms",
    publishedAt: "2026-04-18T01:54:20Z",
  },
  {
    source: "The Times of India",
    title: "Irdai keeps FY27 cession rate at 4%, backs GIC Re role",
    description:
      "Irdai has maintained the mandatory 4% cession rate for FY27, directing general insurers to place this share with GIC Re. This decision aims to solidify GIC Re's position in India's reinsurance market, despite the entry of new domestic players like Jio-Allianz…",
    url: "https://economictimes.indiatimes.com/markets/stocks/news/irdai-keeps-fy27-cession-rate-at-4-backs-gic-re-role/articleshow/130345647.cms",
    publishedAt: "2026-04-18T01:29:47Z",
  },
  {
    source: "The Times of India",
    title: "Sebi clears IPOs of Avaada, Grand Housing & 2 others",
    description:
      "The Securities and Exchange Board of India has approved IPOs for four companies, including Avaada Electro, Brookfield-backed Avaada Group's solar PV manufacturing arm. Chennai-based Grand Housing will launch an entirely offer-for-sale IPO by its promoter. Seb…",
    url: "https://economictimes.indiatimes.com/markets/ipos/fpos/sebi-clears-ipos-of-avaada-grand-housing-2-others/articleshow/130345630.cms",
    publishedAt: "2026-04-18T01:25:20Z",
  },
  {
    source: "The Times of India",
    title:
      "RIL to announce Q4 earnings on April 24; board to consider final dividend",
    description:
      "Reliance Industries will announce Q4FY26 earnings on April 24 as its board meets to approve results and consider final dividend for FY26 followed by an analyst meet to discuss performance and outlook",
    url: "https://economictimes.indiatimes.com/markets/stocks/earnings/ril-to-announce-q4-earnings-on-april-24-board-to-consider-final-dividend/articleshow/130337159.cms",
    publishedAt: "2026-04-17T15:32:06Z",
  },
  {
    source: "The Times of India",
    title:
      "US Stocks: Russell 2000 scales intraday peak weeks after war-driven slide into correction",
    description:
      "The small-cap Russell 2000 hit its first ​intraday record high ​on Friday since the U.S.-Iran conflict erupted, ​joining other major indexes at all-time highs and suggesting the recent equities rally is broadening beyond large companies.",
    url: "https://economictimes.indiatimes.com/markets/us-stocks/news/us-stocks-russell-2000-scales-intraday-peak-weeks-after-war-driven-slide-into-correction/articleshow/130335400.cms",
    publishedAt: "2026-04-17T14:05:13Z",
  },
  {
    source: "The Times of India",
    title:
      "GIFT Nifty jumps over 300 points after oil price crash. What to expect on Monday?",
    description:
      "Indian markets are set for a strong opening as GIFT Nifty surged over 300 points tracking falling crude prices and easing tensions with support from Dow Jones Industrial Average strength and improving global risk sentiment",
    url: "https://economictimes.indiatimes.com/markets/stocks/news/gift-nifty-jumps-over-300-points-after-oil-price-crash-what-to-expect-on-monday/articleshow/130335382.cms",
    publishedAt: "2026-04-17T14:02:26Z",
  },
  {
    source: "Boston Herald",
    title: "Wall Street on pace for winning week amid Israel-Lebanon ceasefire",
    description:
      "That would allow oil tankers to exit the Persian Gulf again and carry crude to customers worldwide.",
    url: "https://www.bostonherald.com/2026/04/17/wall-street-israel-lebanon-ceasefire/",
    publishedAt: "2026-04-17T13:19:11Z",
  },
  {
    source: "The Times of India",
    title:
      "Jio Financial Q4 Results: Cons PAT declines 14% YoY to Rs 272 crore despite 106% surge in revenue",
    description:
      "Jio Financial Q4 Results: Jio Financial Services on Friday reported a 14% year-on-year decline in its consolidated net profit for the quarter ended March 31, 2026 at Rs 272 crore compared to Rs 316 crore in the year ago period even as revenue surged 106% to R…",
    url: "https://economictimes.indiatimes.com/markets/stocks/earnings/jio-financial-q4-results-cons-pat-declines-14-yoy-to-rs-272-crore-despite-106-surge-in-revenue/articleshow/130334137.cms",
    publishedAt: "2026-04-17T13:15:18Z",
  },
  {
    source: "The Times of India",
    title:
      "Quote of the day Stanley Druckenmiller: \"Earnings don't move the overall market; it's the Federal Reserve Board. Focus on the central banks, and focus on the movement of liquidity.\"",
    description:
      "Central banks like the Federal Reserve control market direction through liquidity. Abundant money fuels asset prices, while tightening liquidity can stall markets. Even strong company earnings may not boost stock values when money is scarce. Investors should …",
    url: "https://economictimes.indiatimes.com/markets/us-stocks/news/quote-of-the-day-stanley-druckenmiller-earnings-dont-move-the-overall-market-its-the-federal-reserve-board-focus-on-the-central-banks-and-focus-on-the-movement-of-liquidity-/articleshow/130330876.cms",
    publishedAt: "2026-04-17T12:30:00Z",
  },
  {
    source: "Economictimes.com",
    title:
      "Lloyds Metals among 8 midcap-cap stocks that hit 52-week highs & rallied up to 31% in a month",
    description:
      "On Friday, the benchmark Sensex climbed 504 points to settle at 78,493. Reflecting the broader market upswing, 11 stocks from the BSE 150 midcap index touched their 52-week highs, marking their strongest performance in the past year. Investors typically see t…",
    url: "https://m.economictimes.com/markets/stocks/news/lloyds-metals-among-8-midcap-cap-stocks-that-hit-52-week-highs-amp-rallied-up-to-31-in-a-month/fresh-highs/slideshow/130332943.cms",
    publishedAt: "2026-04-17T12:20:41Z",
  },
  {
    source: "BusinessLine",
    title:
      "Nifty ends five-day rally week on a quiet high; FMCG steals the show",
    description:
      "The BSE Sensex settled at 78,493.54, gaining 504.86 points or 0.65%, while the Nifty 50 closed at 24,353.55, up 156.80 points or 0.65%",
    url: "https://www.thehindubusinessline.com/markets/nifty-ends-five-day-rally-week-on-a-quiet-high-fmcg-steals-the-show/article70873498.ece",
    publishedAt: "2026-04-17T12:05:19Z",
  },
  {
    source: "Abcnews.com",
    title:
      "World shares mixed and oil falls after Wall Street sets another record on ceasefire hopes",
    description:
      "World shares are mixed even after Wall Street set another record, as investors watch for signs of U.S.-Iran talks and an extension of the ceasefire expiring next week",
    url: "https://abcnews.com/Business/wireStory/world-shares-mixed-oil-falls-after-wall-street-132127130",
    publishedAt: "2026-04-17T11:52:57Z",
  },
  {
    source: "BusinessLine",
    title: "Rupee rises 29 paise to settle at 92.85 against US dollar",
    description:
      "The unit touched the day's low of 92.98 before ending the session at 92.85 (provisional) against the American currency, up 29 paise from the previous closing level",
    url: "https://www.thehindubusinessline.com/markets/forex/rupee-rises-29-paise-to-settle-at-9285-against-us-dollar/article70873365.ece",
    publishedAt: "2026-04-17T10:32:49Z",
  },
  {
    source: "The Times of India",
    title:
      "Why stock market rose today? Sensex jumps 500 points, Nifty settles above 24,350. 5 key factors explained",
    description:
      "Indian stock markets saw significant gains on Friday. The Sensex and Nifty closed the week over 2% higher. This recovery follows a March selloff. Bulls are gaining momentum amid hopes for a quicker end to the Iran-US conflict. The market capitalization of BSE…",
    url: "https://economictimes.indiatimes.com/markets/stocks/news/why-stock-market-rose-today-sensex-jumps-500-points-nifty-settles-above-24350-5-key-factors-explained/articleshow/130329422.cms",
    publishedAt: "2026-04-17T10:16:36Z",
  },
  {
    source: "The Times of India",
    title:
      "Windlas Biotech announces Rs 47 crore buyback at Rs 1,000/share; sets April 24 as record date",
    description:
      "Windlas Biotech approved a Rs 47 crore share buyback at Rs 1,000 per share via the tender route, with April 24 set as the record date. The move covers 2.23% equity and excludes promoters. Shares rose 2% following the announcement, reflecting positive investor…",
    url: "https://economictimes.indiatimes.com/markets/stocks/news/windlas-biotech-announces-rs-47-crore-buyback-at-rs-1000/share-sets-april-24-as-record-date/articleshow/130329363.cms",
    publishedAt: "2026-04-17T10:07:55Z",
  },
  {
    source: "The Times of India",
    title:
      "West Asia crisis: India resilient for now, but second-order inflation pain is coming, warns Swaminathan Aiyar",
    description:
      "India might weather the West Asia conflict's economic storm if it ends soon, according to Swaminathan Aiyar.  While a swift resolution is expected due to US political pressures, second-order effects like rising inflation and fertilizer costs are unavoidable. …",
    url: "https://economictimes.indiatimes.com/markets/expert-view/west-asia-crisis-india-resilient-for-now-but-second-order-inflation-pain-is-coming-warns-swaminathan-aiyar/articleshow/130328494.cms",
    publishedAt: "2026-04-17T09:28:04Z",
  },
  {
    source: "The Times of India",
    title:
      "Aluminium and copper to stay elevated, steel risky: CLSA's top metals and cement calls for FY27",
    description:
      "Base metals like aluminium and copper present significant opportunities, according to CLSA India's Indrajit Agarwal. Steel faces near-term downside risks. Aluminium prices are expected to rise due to supply disruptions and increasing demand. Cement sector ant…",
    url: "https://economictimes.indiatimes.com/markets/expert-view/aluminium-and-copper-to-stay-elevated-steel-risky-clsas-top-metals-and-cement-calls-for-fy27/articleshow/130327158.cms",
    publishedAt: "2026-04-17T08:47:13Z",
  },
  {
    source: "BusinessLine",
    title:
      "Sensex, Nifty hold gains led by FMCG stocks rally, Wipro, HDFC Life top losers",
    description:
      "Equity benchmarks continued to trade in positive territory on Friday’s afternoon session, supported by optimism around easing geopolitical tensions and fresh foreign fund inflows.",
    url: "https://www.thehindubusinessline.com/markets/stock-markets/sensex-nifty-hold-gains-led-by-fmcg-stocks-rally-wipro-hdfc-life-top-losers/article70872871.ece",
    publishedAt: "2026-04-17T07:43:14Z",
  },
  {
    source: "BusinessLine",
    title:
      "Sensex, Nifty hold steady at midday; HUL, Nestle lead gains as IT, Financials weigh",
    description:
      "The session’s tone has been shaped by easing geopolitical concerns, particularly around US-Iran diplomatic engagement, which has moderated crude oil prices and tempered near-term inflation worries",
    url: "https://www.thehindubusinessline.com/markets/sensex-nifty-hold-steady-at-midday-hul-nestle-lead-gains-as-it-financials-weigh/article70872840.ece",
    publishedAt: "2026-04-17T07:36:47Z",
  },
  {
    source: "Yenicaggazetesi.com",
    title: "Asya borsaları satışla güne başladı",
    description:
      'ABD Başkanı Trump’ın "İran ile anlaşmaya yakınız" açıklaması küresel ölçekte diplomasi umutlarını artırsa da, Asya borsaları hafta sonu öncesi risk almak istemeyen yatırımcıların satış baskısıyla güne başladı.',
    url: "https://www.yenicaggazetesi.com/asya-borsalari-satisla-gune-basladi-1019990h.htm",
    publishedAt: "2026-04-17T06:44:17Z",
  },
  {
    source: "The Times of India",
    title:
      "RVNL shares jump 6% on railway order worth Rs 967 crore. Check details",
    description:
      "Rail Vikas Nigam Limited shares climbed more than six percent on Friday. The company emerged as the lowest bidder for a significant domestic railway order valued at nearly Rs 968 crore. This EPC order from East Coast Railway involves constructing key bridges …",
    url: "https://economictimes.indiatimes.com/markets/stocks/news/rvnl-shares-jump-6-on-railway-order-worth-rs-967-crore-check-details/articleshow/130324589.cms",
    publishedAt: "2026-04-17T06:10:43Z",
  },
  {
    source: "The Times of India",
    title:
      "Top stock picks for 2025: Defence, banks, power, and infra on Ambareesh Baliga's radar",
    description:
      "Market analyst Ambareesh Baliga suggests a stock portfolio for the next one to five years. He highlights defence stocks like Mazagon Dock and Bharat Electronics. Banking picks include HDFC Bank and Kotak Mahindra Bank. For infrastructure, Larsen & Toubro is r…",
    url: "https://economictimes.indiatimes.com/markets/expert-view/top-stock-picks-for-2026-defence-banks-power-and-infra-on-ambareesh-baligas-radar/articleshow/130323327.cms",
    publishedAt: "2026-04-17T05:03:33Z",
  },
  {
    source: "BusinessLine",
    title: "Rupee rises 28 paise to 92.86 against US dollar in early trade",
    description:
      "Buying of Indian equities by foreign investors also supported the local currency even though it stayed under pressure due to a firm dollar, forex traders said",
    url: "https://www.thehindubusinessline.com/markets/forex/rupee-rises-28-paise-to-9286-against-us-dollar-in-early-trade/article70872285.ece",
    publishedAt: "2026-04-17T04:28:30Z",
  },
  {
    source: "The Times of India",
    title:
      "​Sensex rises over 150 points, Nifty above 24,200 amid rising Iran-US war peace hopes; broader markets outperform",
    description:
      "Indian stock indices Sensex and Nifty edged higher, with mid and small-cap stocks outperforming. Sentiment remains fragile despite rising hopes of US-Iran peace talks and a ceasefire between Lebanon and Israel. Oil prices cooled down as de-escalation hopes ea…",
    url: "https://economictimes.indiatimes.com/markets/stocks/news/sensex-rises-over-150-points-nifty-above-24200-amid-rising-iran-us-war-peace-hopes-broader-markets-outperform/articleshow/130322432.cms",
    publishedAt: "2026-04-17T04:10:48Z",
  },
  {
    source: "BusinessLine",
    title: "Nifty dips on profit booking; IT drags, defence and metals hold",
    description:
      "Nifty 50 opened at 24,165.90, dropping to 24,149.90, a decline of 46.85 points (0.19%) by 9:16 am; Sensex opened at 77,976.13 and rose to 78,128.35, gaining 139.67 points (0.18%)",
    url: "https://www.thehindubusinessline.com/markets/nifty-dips-on-profit-booking-it-drags-defence-and-metals-hold/article70872227.ece",
    publishedAt: "2026-04-17T04:07:25Z",
  },
  {
    source: "The Times of India",
    title: "Civic bodies turn to bond market after budget incentive",
    description:
      "In a strategic move towards urban development, Indian cities are set to tap into the debt market for funding. Key players like the Bombay Municipal Corporation and Ahmedabad Municipal Corporation are on board to secure substantial financial resources. Meanwhi…",
    url: "https://economictimes.indiatimes.com/markets/bonds/civic-bodies-turn-to-bond-market-after-budget-incentive/articleshow/130320828.cms",
    publishedAt: "2026-04-17T02:04:38Z",
  },
  {
    source: "Economictimes.com",
    title:
      "Sensex Today | Nifty 50 | Stock Market Live Updates: GIFT Nifty jumps 50 nearly points; oil prices, Asian markets drop",
    description:
      "Indian equities closed slightly lower on Thursday amid heightened volatility linked to the weekly Sensex expiry, even as supportive factors like a stronger rupee and softer Brent crude offered some cushion. Analysts see immediate short-term support in the 23,…",
    url: "https://m.economictimes.com/markets/stocks/live-blog/bse-sensex-today-nifty50-stock-market-live-updates-gift-nifty-ril-tcs-share-price-17-april-2026/liveblog/130320795.cms",
    publishedAt: "2026-04-17T01:55:33Z",
  },
  {
    source: "BusinessLine",
    title: "Stock Market Live: Stock to buy today: Uno Minda (₹1,109.70)",
    description:
      "Sensex, Nifty, Share Price LIVE: The stock of Uno Minda has been in a downtrend since the beginning of this year. However, over the past month, it was in a consolidation phase, and this week, it has broken out of a key resistance at ₹1,090. Also, for more tha…",
    url: "https://www.thehindubusinessline.com/markets/stock-market-nifty-sensex-live-updates-17-april-2026/article70869774.ece",
    publishedAt: "2026-04-17T01:02:34Z",
  },
  {
    source: "The Times of India",
    title:
      "GIFT Nifty hints at positive start; here's trading setup for the day",
    description:
      "Indian equities closed lower amid weekly expiry volatility, with support seen at 23,450-23,100 and resistance at 24,400. Global markets showed mixed signals, with US stocks inching higher on ceasefire hopes. The Indian rupee strengthened, while Brent crude pr…",
    url: "https://economictimes.indiatimes.com/markets/stocks/news/gift-nifty-hints-at-positive-start-heres-trading-setup-for-the-day/articleshow/130320381.cms",
    publishedAt: "2026-04-17T00:59:03Z",
  },
  {
    source: "The Times of India",
    title: "Sensex ends barely changed at 78k level",
    description:
      "India Business News: Mumbai: In volatile trades on Thursday, sensex opened about 600 points up on peace hopes in West Asia. However, the index gave up the gains by mid-ses.",
    url: "https://timesofindia.indiatimes.com/business/india-business/sensex-ends-barely-changed-at-78k-level/articleshow/130320251.cms",
    publishedAt: "2026-04-17T00:27:17Z",
  },
  {
    source: "The Times of India",
    title:
      "Ahead of Market: 10 things that will decide stock market action on Friday",
    description:
      "Sensex and Nifty ended lower in a volatile session as profit booking in banking stocks erased early gains. Despite easing volatility and supportive global cues, caution persists due to geopolitical uncertainties, while technical indicators suggest a bullish t…",
    url: "https://economictimes.indiatimes.com/markets/stocks/news/ahead-of-market-10-things-that-will-decide-stock-market-action-on-friday/articleshow/130312087.cms",
    publishedAt: "2026-04-16T15:57:41Z",
  },
  {
    source: "BusinessLine",
    title:
      "Top Business & Market Headlines Today — BL Morning Report, April 17, 2026",
    description:
      "Get today’s top business news, market headlines about the Stock Market, Sensex & Nifty trends, key market insights, economic highlights, and the latest updates from India and global markets.",
    url: "https://www.thehindubusinessline.com/multimedia/audio/top-business-amp-market-headlines-today-bl-morning-report-april-17-2026/article70869479.ece",
    publishedAt: "2026-04-16T15:26:46Z",
  },
  {
    source: "BusinessLine",
    title:
      "Q4 Results Highlights Today: Wipro con. Q4 PAT down, board approves buyback, HDFC AMC profit dips, Alok Ind loss widens",
    description:
      "Q4 Results Highlights Today, 16th April 2026: Find all the latest Q4 results 2026 updates of Wipro, HDFC Life Insurance Company, HDFC Asset Management Company, CRISIL, Angel One, Waaree Renewable Technologies, Alok Industries, VST Industries, SG FINSERVE, Ami…",
    url: "https://www.thehindubusinessline.com/markets/q4-results-highlights-today-wipro-hdfc-life-insurance-hdfc-asset-management-crisil-angel-one-waaree-renewable-tech-alok-ind-hdbfs-icici-results-16-april-2026/article70867609.ece",
    publishedAt: "2026-04-16T14:07:55Z",
  },
  {
    source: "The Times of India",
    title: "US stocks today: US stocks open higher with earnings in focus",
    description:
      "Wall ​Street's ​main indexes ​opened higher on Wednesday as investors assessed ‌the ⁠latest developments ⁠in ​the Middle East and ​a raft of corporate earnings, ​while awaiting ⁠remarks from ‌Federal ​Reserve ​officials.",
    url: "https://economictimes.indiatimes.com/markets/us-stocks/news/us-stocks-today-us-stocks-open-higher-with-earnings-in-focus/articleshow/130308985.cms",
    publishedAt: "2026-04-16T13:34:43Z",
  },
  {
    source: "Economictimes.com",
    title:
      "GMDC, Gujarat Alkalies among 8 commodities stocks that hit 52-week high; rally up to 65% in a month",
    description:
      "On Thursday, the benchmark Sensex fell 122 points to close at 77,988. Despite the broader market decline, eight stocks from the BSE commodities index touched their 52-week highs, marking their strongest performance in a year. Such milestones are often seen by…",
    url: "https://m.economictimes.com/markets/stocks/news/gmdc-gujarat-alkalies-among-8-commodities-stocks-that-hit-52-week-high-rally-up-to-65-in-a-month/commodity-surge/slideshow/130307508.cms",
    publishedAt: "2026-04-16T12:15:49Z",
  },
  {
    source: "The Times of India",
    title:
      "Gautam Duggad on why midcaps will keep beating Nifty and his top bets for FY27",
    description:
      "Gautam Duggad of Motilal Oswal Financial Services anticipates a sharp earnings slowdown in the fourth quarter. He strongly recommends PSU banks, defence stocks, and capital market plays for the upcoming fiscal year 2027. Duggad believes midcap companies will …",
    url: "https://economictimes.indiatimes.com/markets/expert-view/gautam-duggad-on-why-midcaps-will-keep-beating-nifty-and-his-top-bets-for-fy27/articleshow/130305481.cms",
    publishedAt: "2026-04-16T11:23:44Z",
  },
  {
    source: "BusinessLine",
    title:
      "Stock Market Highlights: Sensex, Nifty settle marginally lower; Sensex closes down 122 points at 77,988, Nifty50 dips 34 points to 24,196",
    description:
      "Sensex, Nifty, Share Price Updates: Benchmarks settled marginally lower. Sensex declined 122.56 pts or 0.16% to 77,988.68, and Nifty 50 dipped 34.55 pts or 0.14% to 24,196.75.",
    url: "https://www.thehindubusinessline.com/markets/share-market-nifty-sensex-highlights-16-april-2026/article70865685.ece",
    publishedAt: "2026-04-16T11:11:42Z",
  },
  {
    source: "BusinessLine",
    title: "Stock markets close lower on profit-taking in financial shares",
    description:
      "Indian stock markets declined as profit-taking in financial shares led to lower closes for Sensex and Nifty.",
    url: "https://www.thehindubusinessline.com/markets/stock-markets-close-lower-on-profit-taking-in-financial-shares/article70868922.ece",
    publishedAt: "2026-04-16T11:06:58Z",
  },
  {
    source: "The Times of India",
    title:
      "22k gold rate today: Check 24K, 22K gold prices (April 16, 2026) on Tanishq, Malabar Gold & Diamonds, Kalyan Jewellers, Joyalukkas and IBJA",
    description:
      "Gold rate today: Gold prices saw a slight increase on April 16, 2026, at major Indian jewellers. This comes as Akshaya Tritiya approaches on April 19, 2026. Brands are offering pre-booking deals and rate protection to attract customers.",
    url: "https://economictimes.indiatimes.com/wealth/invest/22k-gold-rate-today-check-24k-22k-gold-prices-april-16-2026-on-tanishq-malabar-gold-diamonds-kalyan-jewellers-joyalukkas-and-ibja/articleshow/130304478.cms",
    publishedAt: "2026-04-16T10:47:46Z",
  },
  {
    source: "The Times of India",
    title:
      "Vikas Khemani bets big on IndiGo, BHEL, and PSU banks amid market volatility",
    description:
      "Vikas Khemani of Carnelian Asset Management outlines his investment strategy amid market volatility. He favors mid and large-cap stocks, with selective contra plays like IndiGo. Khemani prefers conventional power enablers over renewables and emphasizes compan…",
    url: "https://economictimes.indiatimes.com/markets/expert-view/vikas-khemani-bets-big-on-indigo-bhel-and-psu-banks-amid-market-volatility/articleshow/130302459.cms",
    publishedAt: "2026-04-16T09:11:44Z",
  },
  {
    source: "The Times of India",
    title:
      "Earnings may drop but opportunity bigger; Vikas Khemani makes bullish call on India markets",
    description:
      "Indian markets are rallying after a sell-off. Vikas Khemani of Carnelian Asset Management believes India's investment case remains strong. He sees short-term earnings disruptions as opportunities. Khemani has increased exposure to banking, financial services,…",
    url: "https://economictimes.indiatimes.com/markets/expert-view/earnings-may-drop-but-opportunity-is-bigger-vikas-khemani-makes-bullish-call-on-india-markets/articleshow/130302186.cms",
    publishedAt: "2026-04-16T08:55:54Z",
  },
  {
    source: "The Times of India",
    title:
      "Bears return to D-St! Sensex erases all gains, tumbles 700 points from peak; Nifty back below 24,200 mark",
    description:
      "Indian stock markets experienced a downturn on Thursday. The Sensex and Nifty saw significant profit booking, erasing earlier gains. Several heavyweight stocks like ONGC and HDFC Bank declined. The market volatility is attributed to the weekly expiry of Sense…",
    url: "https://economictimes.indiatimes.com/markets/stocks/news/sensex-erases-all-gains-tumbles-800-points-from-peak-nifty-back-below-24200-mark/articleshow/130302205.cms",
    publishedAt: "2026-04-16T08:54:09Z",
  },
  {
    source: "The Times of India",
    title: "Kalpataru Q4 pre-sales rise 6 % to Rs 1,833 crore",
    description:
      "Realty firm Kalpataru has reported 6 per cent increase in sales bookings at Rs 1,833 crore for the fourth quarter of the last fiscal.",
    url: "https://economictimes.indiatimes.com/markets/digital-real-estate/realty-news/kalpataru-q4-pre-sales-rise-6-to-rs-1833-crore/articleshow/130301662.cms",
    publishedAt: "2026-04-16T08:26:11Z",
  },
  {
    source: "The Times of India",
    title:
      "HDFC AMC Q4 Results: Cons profit drops 2% YoY to Rs 623 crore; co declares Rs 54/share dividend",
    description:
      "HDFC AMC Q4 Results: The company’s board has recommended a final dividend of Rs 54 per share for the financial year ended March 2026.",
    url: "https://economictimes.indiatimes.com/markets/stocks/earnings/hdfc-amc-q4-results-cons-profit-drops-2-yoy-to-rs-623-crore-co-declares-rs-54/share-dividend/articleshow/130300996.cms",
    publishedAt: "2026-04-16T07:47:04Z",
  },
  {
    source: "BusinessLine",
    title: "Sensex, Nifty pare early gains, metal stocks shine amid volatility",
    description:
      "Equity benchmarks surrendered early gains in Thursday’s afternoon session, even as midcap stocks showed resilience and smallcaps managed mild advances. The pullback in frontline indices came after a strong start, driven by easing geopolitical concerns and pos…",
    url: "https://www.thehindubusinessline.com/markets/sensex-nifty-pare-early-gains-metal-stocks-shine-amid-volatility/article70868171.ece",
    publishedAt: "2026-04-16T07:44:14Z",
  },
  {
    source: "The Times of India",
    title: "Silver futures rise to Rs 2.53 lakh/kg",
    description:
      "Silver prices saw a significant jump of 0.82 percent, reaching Rs 2,53,800 per kilogram in futures trade today. This rise is linked to renewed uncertainty surrounding United States trade policy. Market participants are building fresh positions, contributing t…",
    url: "https://economictimes.indiatimes.com/markets/commodities/news/silver-futures-rise-to-rs-2-53-lakh/kg/articleshow/130300317.cms",
    publishedAt: "2026-04-16T07:09:51Z",
  },
  {
    source: "CNBC",
    title:
      "Iran war drags India’s goods exports 7% lower in March — more pain ahead",
    description:
      "Iran war cuts India’s March goods exports by over 7%, hammering key sectors and markets, lifting costs and delaying recovery for months.",
    url: "https://www.cnbc.com/2026/04/16/india-goods-exports-march-drop-more-pain-ahead.html",
    publishedAt: "2026-04-16T07:01:30Z",
  },
  {
    source: "Yenicaggazetesi.com",
    title:
      "Asya borsaları rekorlara koşuyor: ABD-İran görüşmeleri ve Çin büyümesi coşturdu (16 Nisan 2026)",
    description:
      "Asya borsaları, ABD-İran müzakerelerindeki iyimserlik ve Çin’in beklentileri aşan yüzde 5’lik büyümesiyle yükseldi. Nikkei 225 rekor kırarken, bölge endeksleri pozitif seyir izliyor.",
    url: "https://www.yenicaggazetesi.com/asya-borsalari-rekorlara-kosuyor-abd-iran-gorusmeleri-ve-cin-buyumesi-costurdu-16-nisan-2026-1019647h.htm",
    publishedAt: "2026-04-16T06:59:11Z",
  },
  {
    source: "The Times of India",
    title:
      "Indian bonds retreat after previous rally; focus on debt sale, US-Iran peace talks",
    description:
      "Indian bonds eased after recent gains as upcoming debt auctions and evolving US-Iran peace talks kept investors cautious, leading to a rise in yields.",
    url: "https://economictimes.indiatimes.com/markets/bonds/indian-bonds-retreat-after-previous-rally-focus-on-debt-sale-us-iran-peace-talks/articleshow/130297854.cms",
    publishedAt: "2026-04-16T04:46:13Z",
  },
  {
    source: "Dtnext.in",
    title: "Stock markets climb in early trade amid hopes of US–Iran truce",
    description:
      "Sensex and Nifty rallied in early trade as hopes of a US–Iran truce eased geopolitical tensions, cooled crude oil prices and boosted risk appetite. Global markets traded higher, FIIs turned net buyers and tech, finance and metal stocks led the gains on Dalal …",
    url: "https://www.dtnext.in/news/business/stock-markets-climb-in-early-trade-amid-hopes-of-usiran-truce",
    publishedAt: "2026-04-16T04:33:06Z",
  },
];

const output = {
  sentimentData: [
    { index: 0, sentiment: 0.2 },
    { index: 1, sentiment: 0.8 },
    { index: 2, sentiment: 0.7 },
    { index: 3, sentiment: 0.2 },
    { index: 4, sentiment: -0.3 },
  ],
  aditionAIDATA: {
    insight:
      "Overall sentiment leans positive, bolstered by strong ETF performance and advancements in the semiconductor sector, somewhat offset by leadership changes at a major tech firm.",
    signalStrength: "Buy",
    topTopics: [
      "NVIDIA",
      "ETF",
      "Returns",
      "Samsung",
      "Semiconductors",
      "Apple",
      "CEO Succession",
      "AI",
      "Technology",
    ],
  },
};

module.exports = simplifiedData;
