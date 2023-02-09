window.BENCHMARK_DATA = {
  "lastUpdate": 1675912237208,
  "repoUrl": "https://github.com/datafuselabs/opendal",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c43d3a0c2228e4a5bc4ff000c0487bf459148584",
          "message": "ci: Setup benchmark workflow (#1200)\n\n* ci: Setup benchmark workflow\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Enable memory and fs test\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-19T14:50:13+08:00",
          "tree_id": "32314d28759506524459b078c685b21648a89846",
          "url": "https://github.com/datafuselabs/opendal/commit/c43d3a0c2228e4a5bc4ff000c0487bf459148584"
        },
        "date": 1674112502195,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 320822,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 304194,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 68125,
            "range": "± 2980",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 731725,
            "range": "± 9629",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11123035,
            "range": "± 147417",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 47299795,
            "range": "± 734398",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 88260,
            "range": "± 1929",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1091914,
            "range": "± 35049",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 16992079,
            "range": "± 298204",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 72721296,
            "range": "± 1164611",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 89247,
            "range": "± 1961",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 86993,
            "range": "± 8485",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 146388,
            "range": "± 12635",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 224686,
            "range": "± 13141",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 471694,
            "range": "± 12847",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 456113,
            "range": "± 9099",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 280596,
            "range": "± 17895",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 538307,
            "range": "± 7681",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1099465,
            "range": "± 213053",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2194845,
            "range": "± 172667",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 6701476,
            "range": "± 160703",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 5740115,
            "range": "± 703980",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 9058700,
            "range": "± 722216",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 29210369,
            "range": "± 642102",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 59066910,
            "range": "± 2771345",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 30230628,
            "range": "± 442787",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 28842011,
            "range": "± 1259400",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 55810063,
            "range": "± 3354188",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 110193616,
            "range": "± 8038715",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 190997490,
            "range": "± 33681440",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1067,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13343,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 440349,
            "range": "± 448",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1802707,
            "range": "± 24279",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1388,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 44273,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1453425,
            "range": "± 2771",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 13247780,
            "range": "± 173632",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1739,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3418,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6962,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 13599,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 27379,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 84228,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 168543,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 337037,
            "range": "± 429",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 684842,
            "range": "± 709",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1368840,
            "range": "± 1394",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2288030,
            "range": "± 37582",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4523913,
            "range": "± 67116",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 9134686,
            "range": "± 161210",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 18196319,
            "range": "± 375250",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 36492914,
            "range": "± 678852",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 28585100,
            "range": "± 452369",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 56093851,
            "range": "± 808006",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 113129324,
            "range": "± 1295261",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 226378255,
            "range": "± 1747404",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 452277589,
            "range": "± 2960340",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 228697,
            "range": "± 45291",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1378228,
            "range": "± 52206",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19507058,
            "range": "± 2272136",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 77520458,
            "range": "± 7711775",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 982,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 56454,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1682834,
            "range": "± 5034",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 15165469,
            "range": "± 316550",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 124,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 152,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5cbca9cafcfba2f54ee9f11504e07c66dda11386",
          "message": "refactor: Remove observe read/write (#1202)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-19T16:34:54+08:00",
          "tree_id": "2c63897f0d0f0a39e239271b40404415a70633d7",
          "url": "https://github.com/datafuselabs/opendal/commit/5cbca9cafcfba2f54ee9f11504e07c66dda11386"
        },
        "date": 1674118452711,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 326460,
            "range": "± 765",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 307376,
            "range": "± 1506",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 63047,
            "range": "± 7766",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 685129,
            "range": "± 8905",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 10824724,
            "range": "± 159489",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 45990623,
            "range": "± 751999",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 84236,
            "range": "± 1567",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1065346,
            "range": "± 31869",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 16793374,
            "range": "± 238751",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 69473506,
            "range": "± 1249802",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 84952,
            "range": "± 1445",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 68046,
            "range": "± 3264",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 151407,
            "range": "± 4888",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 269866,
            "range": "± 10642",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 560053,
            "range": "± 24987",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 443903,
            "range": "± 13853",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 376645,
            "range": "± 27678",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 682502,
            "range": "± 11587",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1414783,
            "range": "± 66397",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2766749,
            "range": "± 57452",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 6980728,
            "range": "± 148579",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 6894915,
            "range": "± 256466",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 13725280,
            "range": "± 778442",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 26631357,
            "range": "± 374933",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 61784165,
            "range": "± 1596889",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 30457404,
            "range": "± 414590",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 41998973,
            "range": "± 2806655",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 73384384,
            "range": "± 2698066",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 113687020,
            "range": "± 3376763",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 227520144,
            "range": "± 9358165",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1041,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 12912,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 496395,
            "range": "± 2522",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4526240,
            "range": "± 67530",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1394,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 59189,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1804927,
            "range": "± 46460",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 14156771,
            "range": "± 137238",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1945,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3865,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6800,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 15573,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 26814,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 105266,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 210308,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 420501,
            "range": "± 490",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 853415,
            "range": "± 745",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1705714,
            "range": "± 3141",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 3141606,
            "range": "± 94374",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 6027974,
            "range": "± 248452",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 11903855,
            "range": "± 504020",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 25737087,
            "range": "± 1191908",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 52000730,
            "range": "± 2118458",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 21120966,
            "range": "± 49482",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 42204268,
            "range": "± 91982",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 84245649,
            "range": "± 301418",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 168758818,
            "range": "± 1016121",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 337586521,
            "range": "± 924067",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 223351,
            "range": "± 51787",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1498225,
            "range": "± 68890",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19687698,
            "range": "± 444314",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 82034234,
            "range": "± 1462795",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1071,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 41597,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 2278695,
            "range": "± 90059",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 16317896,
            "range": "± 119772",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 25,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 133,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 152,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de52ffe4a6d513f1bc3e518ab9fd2f3f8e8de091",
          "message": "feat: Let's try play with python (#1205)\n\n* feat: Let's try play with python\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Fix build on windows\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Don't commit cargo.lock\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Fix typo\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Make CI happy\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-19T17:27:19+08:00",
          "tree_id": "43362b8f6f585fd5fc73beac7905069a65f2d020",
          "url": "https://github.com/datafuselabs/opendal/commit/de52ffe4a6d513f1bc3e518ab9fd2f3f8e8de091"
        },
        "date": 1674121579685,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 327471,
            "range": "± 681",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 311653,
            "range": "± 957",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 69786,
            "range": "± 10806",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 756861,
            "range": "± 21182",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11789465,
            "range": "± 203944",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 49431709,
            "range": "± 1413881",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 92024,
            "range": "± 1640",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1155746,
            "range": "± 31072",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17968678,
            "range": "± 335852",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 75546912,
            "range": "± 1088463",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 91148,
            "range": "± 2016",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 90933,
            "range": "± 9414",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 155073,
            "range": "± 20031",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 333578,
            "range": "± 39417",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 514643,
            "range": "± 36828",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 493205,
            "range": "± 17647",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 341942,
            "range": "± 30607",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 634970,
            "range": "± 33225",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1245915,
            "range": "± 64988",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2561715,
            "range": "± 215053",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 7547966,
            "range": "± 161769",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 6892352,
            "range": "± 553491",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 11346783,
            "range": "± 419556",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 32454586,
            "range": "± 1354664",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 63342904,
            "range": "± 3037967",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 32980789,
            "range": "± 441524",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 32674584,
            "range": "± 2440901",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 60695652,
            "range": "± 4679024",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 119190493,
            "range": "± 3018391",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 218698744,
            "range": "± 34943574",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1044,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 12997,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 434144,
            "range": "± 1244",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 2230945,
            "range": "± 144984",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1156,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 44975,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1441816,
            "range": "± 45538",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 13888974,
            "range": "± 184982",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1526,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3063,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 5927,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 11414,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 22852,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 85777,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 171220,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 342366,
            "range": "± 1033",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 685377,
            "range": "± 1825",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1374906,
            "range": "± 4310",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2642423,
            "range": "± 98903",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 5323707,
            "range": "± 258824",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 10269375,
            "range": "± 403418",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 21326986,
            "range": "± 906478",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 44029250,
            "range": "± 1641108",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 30475298,
            "range": "± 359840",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 62361323,
            "range": "± 718433",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 124672569,
            "range": "± 1182110",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 244722771,
            "range": "± 2598880",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 485637351,
            "range": "± 5033262",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 227715,
            "range": "± 51974",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1520828,
            "range": "± 48694",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19555600,
            "range": "± 1637109",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 77936317,
            "range": "± 6474484",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 967,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 45508,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1789921,
            "range": "± 43476",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 17252139,
            "range": "± 277196",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 124,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 152,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0769590b0ad0b1361cff0c7cdddb1a6f7132ebc6",
          "message": "feat: Let's try play with Node.js (#1206)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-19T18:41:27+08:00",
          "tree_id": "5d5187aa290d7407357bbada9c3e7c294f4043c7",
          "url": "https://github.com/datafuselabs/opendal/commit/0769590b0ad0b1361cff0c7cdddb1a6f7132ebc6"
        },
        "date": 1674126492917,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 319681,
            "range": "± 1489",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 309830,
            "range": "± 1184",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 68264,
            "range": "± 8852",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 732846,
            "range": "± 10247",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11363237,
            "range": "± 254658",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 47699391,
            "range": "± 773445",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 88440,
            "range": "± 1659",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1097939,
            "range": "± 38069",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17113683,
            "range": "± 251947",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 72052654,
            "range": "± 1441863",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 88498,
            "range": "± 1538",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 92006,
            "range": "± 4023",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 148728,
            "range": "± 8683",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 274421,
            "range": "± 11056",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 578469,
            "range": "± 19647",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 460431,
            "range": "± 12076",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 353206,
            "range": "± 5533",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 665627,
            "range": "± 28148",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1358818,
            "range": "± 27532",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2852075,
            "range": "± 61174",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 7208347,
            "range": "± 336550",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 6529188,
            "range": "± 291385",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 13650638,
            "range": "± 591476",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 38432081,
            "range": "± 503945",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 53261082,
            "range": "± 8452928",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 31826669,
            "range": "± 765377",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 36253920,
            "range": "± 1602644",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 65536644,
            "range": "± 2223163",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 119196562,
            "range": "± 4530464",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 261440115,
            "range": "± 5406583",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1075,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 12993,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 507012,
            "range": "± 4668",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4595954,
            "range": "± 57620",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1673,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 57652,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1600649,
            "range": "± 52051",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 13556862,
            "range": "± 109127",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2033,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3556,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 7760,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 13592,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 27075,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 105305,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 210417,
            "range": "± 1549",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 420525,
            "range": "± 858",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 841194,
            "range": "± 1886",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1681134,
            "range": "± 3088",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2953851,
            "range": "± 144638",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 5868661,
            "range": "± 277960",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 12156851,
            "range": "± 597418",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 23593551,
            "range": "± 1206020",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 47430903,
            "range": "± 1715428",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 19686147,
            "range": "± 51752",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 38949223,
            "range": "± 94633",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 77951948,
            "range": "± 273229",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 155776309,
            "range": "± 241365",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 310202289,
            "range": "± 499164",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 236042,
            "range": "± 67121",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1549002,
            "range": "± 90006",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 20044161,
            "range": "± 322821",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 82661859,
            "range": "± 1279946",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1031,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 40285,
            "range": "± 227",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 2144939,
            "range": "± 70326",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 14003698,
            "range": "± 69214",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 25,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 132,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 158,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7419787ecfae56cfd6bc78228fe6d22602bba94f",
          "message": "chore: Add license header for nodejs (#1207)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-19T19:06:49+08:00",
          "tree_id": "79c7df075568d91ca5cec13a3300b24502849465",
          "url": "https://github.com/datafuselabs/opendal/commit/7419787ecfae56cfd6bc78228fe6d22602bba94f"
        },
        "date": 1674128171333,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 351384,
            "range": "± 11290",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 314027,
            "range": "± 464",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 69582,
            "range": "± 7393",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 751923,
            "range": "± 13846",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11580456,
            "range": "± 181019",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 49140052,
            "range": "± 1032744",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 91097,
            "range": "± 1894",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1120770,
            "range": "± 65580",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17641711,
            "range": "± 268038",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 73518796,
            "range": "± 2146077",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 90561,
            "range": "± 1452",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 90357,
            "range": "± 6868",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 127593,
            "range": "± 9203",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 302726,
            "range": "± 37023",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 565883,
            "range": "± 39892",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 481727,
            "range": "± 11922",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 298571,
            "range": "± 9611",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 574290,
            "range": "± 27705",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1157243,
            "range": "± 28944",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2410837,
            "range": "± 161340",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 7260982,
            "range": "± 169851",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 6260459,
            "range": "± 535107",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 10009046,
            "range": "± 348729",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 31285893,
            "range": "± 656741",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 62689787,
            "range": "± 3236181",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 31090418,
            "range": "± 444473",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 30446168,
            "range": "± 1536074",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 58330635,
            "range": "± 2785989",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 116319766,
            "range": "± 8733223",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 203814918,
            "range": "± 29873081",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1069,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13242,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 470035,
            "range": "± 1107",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 2012453,
            "range": "± 84523",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1197,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 47387,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1590836,
            "range": "± 21556",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 14328121,
            "range": "± 171916",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1594,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3159,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6203,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 12411,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 24819,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 89522,
            "range": "± 585",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 178861,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 340074,
            "range": "± 351",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 680600,
            "range": "± 28663",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1360933,
            "range": "± 760",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2262614,
            "range": "± 42409",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4439831,
            "range": "± 69001",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 8823213,
            "range": "± 104763",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 17584593,
            "range": "± 139922",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 35255145,
            "range": "± 257362",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 29013992,
            "range": "± 330808",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 58019734,
            "range": "± 1063726",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 115646568,
            "range": "± 1116712",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 235591439,
            "range": "± 4712333",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 467090425,
            "range": "± 6328909",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 233007,
            "range": "± 41290",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1443390,
            "range": "± 62735",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19388623,
            "range": "± 2024129",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 76492904,
            "range": "± 9312990",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1076,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 44074,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1610144,
            "range": "± 3280",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 16454080,
            "range": "± 446844",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 126,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 155,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1ffe0eb3868f2d17da32a84a8ce7ce23e884fa0b",
          "message": "fix: Retry for read and write should at ObjectReader level (#1211)\n\nfix: Retry for read and write should be ObjectReader level\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-19T22:27:16+08:00",
          "tree_id": "0d62e5e974a19a3ea2c181a5454590edc94ef150",
          "url": "https://github.com/datafuselabs/opendal/commit/1ffe0eb3868f2d17da32a84a8ce7ce23e884fa0b"
        },
        "date": 1674139683366,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 358654,
            "range": "± 4895",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 347698,
            "range": "± 1539",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 77917,
            "range": "± 11755",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 864432,
            "range": "± 36829",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 13255423,
            "range": "± 1155651",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 56363674,
            "range": "± 2658966",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 103399,
            "range": "± 3607",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1310370,
            "range": "± 116304",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 19948310,
            "range": "± 967813",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 85670228,
            "range": "± 3639005",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 105219,
            "range": "± 6470",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 101507,
            "range": "± 5976",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 164754,
            "range": "± 9193",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 305923,
            "range": "± 18669",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 605705,
            "range": "± 12570",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 521199,
            "range": "± 15281",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 390656,
            "range": "± 49115",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 736709,
            "range": "± 46545",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1479140,
            "range": "± 84221",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 3059142,
            "range": "± 453285",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 8143091,
            "range": "± 665894",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 7466787,
            "range": "± 483972",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 13433503,
            "range": "± 643735",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 37292716,
            "range": "± 986936",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 72231208,
            "range": "± 3207961",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 36516636,
            "range": "± 776336",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 41613139,
            "range": "± 2752201",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 78531390,
            "range": "± 3410294",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 153763635,
            "range": "± 4342604",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 307578116,
            "range": "± 15104240",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1276,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 15036,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 555066,
            "range": "± 2309",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4365118,
            "range": "± 41544",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1822,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 63469,
            "range": "± 328",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1598502,
            "range": "± 17876",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 22698075,
            "range": "± 86143",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2066,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 4126,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 9240,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 15903,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 31928,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 116878,
            "range": "± 636",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 233561,
            "range": "± 735",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 467050,
            "range": "± 2165",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 935580,
            "range": "± 3454",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1865250,
            "range": "± 10977",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 3019750,
            "range": "± 101783",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 6043879,
            "range": "± 196745",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 12145137,
            "range": "± 412013",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 24133725,
            "range": "± 554027",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 48335517,
            "range": "± 1077346",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 39390281,
            "range": "± 187848",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 78927179,
            "range": "± 407919",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 162254650,
            "range": "± 1554173",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 315172437,
            "range": "± 966003",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 631147895,
            "range": "± 2038298",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 228245,
            "range": "± 42527",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 2139174,
            "range": "± 173195",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 24597680,
            "range": "± 1952947",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 98411876,
            "range": "± 3704468",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1218,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 49273,
            "range": "± 366",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 2022209,
            "range": "± 43669",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 25127711,
            "range": "± 245772",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 30,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 155,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 178,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ea0cef4c09386ef14f99ae1b44f716f4844d5159",
          "message": "feat: Allow retry sending read request (#1212)\n\n* Revert \"fix: Retry for read and write should at ObjectReader level (#1211)\"\n\nThis reverts commit 1ffe0eb3868f2d17da32a84a8ce7ce23e884fa0b.\n\n* feat: Allow retry sending read request\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Remove not needed clone\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-19T23:01:51+08:00",
          "tree_id": "f21ff10a481c75e147fe3fe80703d0afd269dc8b",
          "url": "https://github.com/datafuselabs/opendal/commit/ea0cef4c09386ef14f99ae1b44f716f4844d5159"
        },
        "date": 1674141702064,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 331830,
            "range": "± 4978",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 306753,
            "range": "± 2085",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 67350,
            "range": "± 12102",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 735012,
            "range": "± 39182",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11672371,
            "range": "± 204273",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 48884219,
            "range": "± 799219",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 91060,
            "range": "± 1904",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1113017,
            "range": "± 41203",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17344528,
            "range": "± 395613",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 72320820,
            "range": "± 1144112",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 88741,
            "range": "± 1355",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 89106,
            "range": "± 4087",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 140949,
            "range": "± 8529",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 286771,
            "range": "± 7105",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 595936,
            "range": "± 26699",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 454659,
            "range": "± 12519",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 349688,
            "range": "± 11065",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 678853,
            "range": "± 27278",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1715479,
            "range": "± 85209",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2838148,
            "range": "± 157737",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 7759976,
            "range": "± 366940",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 7092604,
            "range": "± 651754",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 12540121,
            "range": "± 1068547",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 39061288,
            "range": "± 1331933",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 75537378,
            "range": "± 3703011",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 31955653,
            "range": "± 1266000",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 39150346,
            "range": "± 1833450",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 74155990,
            "range": "± 2556215",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 146331194,
            "range": "± 5989095",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 312413832,
            "range": "± 10267495",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1020,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 12752,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 501514,
            "range": "± 2779",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4227914,
            "range": "± 90439",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1665,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 58002,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1627714,
            "range": "± 28391",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 20874805,
            "range": "± 131387",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1709,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3420,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 7559,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 13304,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 26579,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 105119,
            "range": "± 467",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 210665,
            "range": "± 3944",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 420752,
            "range": "± 1147",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 840385,
            "range": "± 2444",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1691887,
            "range": "± 6678",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2950245,
            "range": "± 450379",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 5578268,
            "range": "± 239223",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 14157452,
            "range": "± 1083304",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 25914278,
            "range": "± 2061715",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 45540652,
            "range": "± 2315812",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 40520152,
            "range": "± 249411",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 80384237,
            "range": "± 380294",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 162901787,
            "range": "± 1598230",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 330921101,
            "range": "± 3208920",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 654947560,
            "range": "± 6289054",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 234456,
            "range": "± 34893",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1599393,
            "range": "± 126806",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19995179,
            "range": "± 593111",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 84172477,
            "range": "± 22737513",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1059,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 62982,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 2360867,
            "range": "± 220940",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 23662281,
            "range": "± 264357",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 25,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 145,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 150,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "439b75d654f2871db933ff330ff50e356ed011c7",
          "message": "chore(deps): bump ibnesayeed/setup-ipfs from cacf727ab8eae418dc4a2534c2c2c19343021c7c to b9b9f7d73db5f77d462225bb37dbd51153351dd9 (#1217)\n\nchore(deps): bump ibnesayeed/setup-ipfs\r\n\r\nBumps [ibnesayeed/setup-ipfs](https://github.com/ibnesayeed/setup-ipfs) from cacf727ab8eae418dc4a2534c2c2c19343021c7c to b9b9f7d73db5f77d462225bb37dbd51153351dd9.\r\n- [Release notes](https://github.com/ibnesayeed/setup-ipfs/releases)\r\n- [Commits](https://github.com/ibnesayeed/setup-ipfs/compare/cacf727ab8eae418dc4a2534c2c2c19343021c7c...b9b9f7d73db5f77d462225bb37dbd51153351dd9)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: ibnesayeed/setup-ipfs\r\n  dependency-type: direct:production\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-01-23T23:40:54+08:00",
          "tree_id": "c1d7c7b93799e212cdd9faf628c43eef4a0e548d",
          "url": "https://github.com/datafuselabs/opendal/commit/439b75d654f2871db933ff330ff50e356ed011c7"
        },
        "date": 1674489595188,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 323564,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 308156,
            "range": "± 3588",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 67731,
            "range": "± 3054",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 732402,
            "range": "± 12045",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11127296,
            "range": "± 178134",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 47309583,
            "range": "± 804418",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 89457,
            "range": "± 3443",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1110079,
            "range": "± 37030",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17106654,
            "range": "± 453848",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 71543547,
            "range": "± 4518913",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 87345,
            "range": "± 2265",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 86982,
            "range": "± 7806",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 121327,
            "range": "± 16717",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 246965,
            "range": "± 4281",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 473564,
            "range": "± 26669",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 443691,
            "range": "± 5060",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 285360,
            "range": "± 41563",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 556158,
            "range": "± 36183",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1174050,
            "range": "± 27059",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2214944,
            "range": "± 37997",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 6641182,
            "range": "± 111664",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 6326013,
            "range": "± 577451",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 9502440,
            "range": "± 987249",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 30371923,
            "range": "± 1584285",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 60303246,
            "range": "± 4379020",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 29102299,
            "range": "± 629509",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 28321851,
            "range": "± 1590959",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 55089001,
            "range": "± 2446977",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 110019514,
            "range": "± 8814561",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 192016105,
            "range": "± 33169233",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1057,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 16212,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 432539,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1752084,
            "range": "± 15962",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1415,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 45574,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1481779,
            "range": "± 7302",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 13582116,
            "range": "± 229758",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1708,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 2850,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 5711,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 11367,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 22515,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 84450,
            "range": "± 639",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 168837,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 337929,
            "range": "± 8690",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 675428,
            "range": "± 860",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1350476,
            "range": "± 949",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2280939,
            "range": "± 34789",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4491922,
            "range": "± 77097",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 8959472,
            "range": "± 175140",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 17982985,
            "range": "± 231949",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 36613845,
            "range": "± 893026",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 28208809,
            "range": "± 395774",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 56509642,
            "range": "± 407706",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 112029295,
            "range": "± 1095801",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 225218898,
            "range": "± 3158745",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 457705628,
            "range": "± 7655022",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 176358,
            "range": "± 48009",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1464731,
            "range": "± 74583",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19380567,
            "range": "± 2123043",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 77515090,
            "range": "± 8166199",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1080,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 46254,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1736639,
            "range": "± 8147",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 15814399,
            "range": "± 242073",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 23,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 125,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 152,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51583f053b4229113070a85988a22c1dfdeb2b15",
          "message": "refactor: Remove not used unwind safe feature (#1218)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-24T00:12:33+08:00",
          "tree_id": "29b3e50af627938af580798b3e8bb66476e855df",
          "url": "https://github.com/datafuselabs/opendal/commit/51583f053b4229113070a85988a22c1dfdeb2b15"
        },
        "date": 1674491445955,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 320150,
            "range": "± 491",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 304700,
            "range": "± 731",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 67528,
            "range": "± 2206",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 738305,
            "range": "± 12871",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11192214,
            "range": "± 204092",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 47706261,
            "range": "± 1227714",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 88476,
            "range": "± 1515",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1099724,
            "range": "± 26455",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 16921064,
            "range": "± 269769",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 71990151,
            "range": "± 1335980",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 88561,
            "range": "± 1601",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 88265,
            "range": "± 7928",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 120184,
            "range": "± 12110",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 230117,
            "range": "± 22052",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 451603,
            "range": "± 25564",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 450372,
            "range": "± 9723",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 280709,
            "range": "± 4544",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 523904,
            "range": "± 25273",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1082973,
            "range": "± 86003",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2247635,
            "range": "± 42839",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 6617412,
            "range": "± 110148",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 6206236,
            "range": "± 533041",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 9429452,
            "range": "± 621086",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 29980106,
            "range": "± 693534",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 60233687,
            "range": "± 4311806",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 29088717,
            "range": "± 565492",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 28641284,
            "range": "± 1782337",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 55620144,
            "range": "± 3147935",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 110467020,
            "range": "± 2015357",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 183937903,
            "range": "± 32360276",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1067,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 12984,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 428737,
            "range": "± 322",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1730511,
            "range": "± 14343",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1152,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 45506,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1493839,
            "range": "± 10542",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 13752735,
            "range": "± 222118",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1732,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 2901,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 5759,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 11535,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 23166,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 83399,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 166724,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 333218,
            "range": "± 1343",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 666690,
            "range": "± 460",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1332911,
            "range": "± 1261",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2185105,
            "range": "± 29510",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4359974,
            "range": "± 33465",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 8715524,
            "range": "± 148390",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 17380281,
            "range": "± 100096",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 34816745,
            "range": "± 268111",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 27670930,
            "range": "± 322950",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 55542183,
            "range": "± 622586",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 112565723,
            "range": "± 1632674",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 222267770,
            "range": "± 3606268",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 442661731,
            "range": "± 3419318",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 182898,
            "range": "± 38716",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1218966,
            "range": "± 213285",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 20781997,
            "range": "± 3774110",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 78783222,
            "range": "± 16935868",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 970,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 42022,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1715514,
            "range": "± 134424",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 14694043,
            "range": "± 342178",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 23,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 125,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 151,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1c9b092efd4aae68b9015cc0aad49ce225be3f3",
          "message": "docs: Polish README (#1220)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-24T13:04:49+08:00",
          "tree_id": "c419eec52dd92b7f41cb2bbeb069ae3d1fb21663",
          "url": "https://github.com/datafuselabs/opendal/commit/f1c9b092efd4aae68b9015cc0aad49ce225be3f3"
        },
        "date": 1674538185201,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 324601,
            "range": "± 1697",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 306709,
            "range": "± 343",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 66821,
            "range": "± 3369",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 720745,
            "range": "± 33181",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 10808820,
            "range": "± 171273",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 45928129,
            "range": "± 1084265",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 87250,
            "range": "± 4001",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1078162,
            "range": "± 55583",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 16356027,
            "range": "± 252218",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 69606397,
            "range": "± 4535390",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 86393,
            "range": "± 1507",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 91295,
            "range": "± 4502",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 136857,
            "range": "± 2446",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 296463,
            "range": "± 13066",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 565087,
            "range": "± 19374",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 451831,
            "range": "± 7472",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 355516,
            "range": "± 31405",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 660974,
            "range": "± 10949",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1308513,
            "range": "± 39841",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2652700,
            "range": "± 43351",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 6540496,
            "range": "± 286746",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 6058772,
            "range": "± 212986",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 11468305,
            "range": "± 790379",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 36038328,
            "range": "± 952211",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 73676580,
            "range": "± 3005224",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 31102534,
            "range": "± 1005726",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 38480002,
            "range": "± 1879603",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 71744213,
            "range": "± 2757035",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 143844123,
            "range": "± 1711671",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 288718997,
            "range": "± 6415134",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1102,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 12987,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 494835,
            "range": "± 633",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4099435,
            "range": "± 51332",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1354,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 57768,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1557920,
            "range": "± 18075",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 21161159,
            "range": "± 97890",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2005,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3485,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6892,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 13756,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 27348,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 103413,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 206646,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 413188,
            "range": "± 306",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 826838,
            "range": "± 1679",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1652349,
            "range": "± 1645",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2422415,
            "range": "± 68861",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4908577,
            "range": "± 106468",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 9645298,
            "range": "± 253936",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 19396114,
            "range": "± 588084",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 38445851,
            "range": "± 817501",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 39622239,
            "range": "± 278851",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 79377831,
            "range": "± 615050",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 158694033,
            "range": "± 982996",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 315725377,
            "range": "± 1628309",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 630988792,
            "range": "± 2583904",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 218242,
            "range": "± 47780",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1641407,
            "range": "± 75693",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19137478,
            "range": "± 1902463",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 79569539,
            "range": "± 2161738",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1064,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 41177,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1687612,
            "range": "± 34126",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 23806231,
            "range": "± 374447",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 25,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 132,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 149,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1518001e81d86bd4d66bcde4a954b15e4716b0f2",
          "message": "ci: Make sure opendal is buildable on windows (#1221)\n\n* CI: Make sure opendal is buildable on windows\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Remove not support chars on windows\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Allow hdfs test to fail\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Fix hdfs\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-26T18:03:29+08:00",
          "tree_id": "8eadb06705c796498b7963f7c66c44474d3e0168",
          "url": "https://github.com/datafuselabs/opendal/commit/1518001e81d86bd4d66bcde4a954b15e4716b0f2"
        },
        "date": 1674728610704,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 368605,
            "range": "± 16391",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 342886,
            "range": "± 1428",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 83984,
            "range": "± 12142",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 830643,
            "range": "± 42643",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 12573696,
            "range": "± 571141",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 53317744,
            "range": "± 1819473",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 100677,
            "range": "± 4353",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1242622,
            "range": "± 120577",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 19183170,
            "range": "± 268342",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 80952687,
            "range": "± 1417854",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 100566,
            "range": "± 1776",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 101654,
            "range": "± 4327",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 162478,
            "range": "± 18549",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 318125,
            "range": "± 13866",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 703892,
            "range": "± 49002",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 518966,
            "range": "± 7574",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 389878,
            "range": "± 27810",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 737458,
            "range": "± 9379",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1477147,
            "range": "± 40320",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2965578,
            "range": "± 161723",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 7660052,
            "range": "± 161901",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 7940810,
            "range": "± 683744",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 13270897,
            "range": "± 768227",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 43806419,
            "range": "± 2767719",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 85696735,
            "range": "± 4860782",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 35638422,
            "range": "± 2851147",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 35203593,
            "range": "± 3256978",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 77885737,
            "range": "± 4263326",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 161490175,
            "range": "± 6628406",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 323781861,
            "range": "± 7115024",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1258,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 15233,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 550539,
            "range": "± 1027",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4770390,
            "range": "± 99816",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1589,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 66271,
            "range": "± 2507",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1778485,
            "range": "± 112230",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 13800078,
            "range": "± 560997",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2363,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 4113,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 8020,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 16164,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 32066,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 117249,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 234481,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 468930,
            "range": "± 652",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 937321,
            "range": "± 1026",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1871981,
            "range": "± 80605",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2811783,
            "range": "± 93947",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 5419942,
            "range": "± 189440",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 10903019,
            "range": "± 408610",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 22117029,
            "range": "± 923088",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 44417799,
            "range": "± 1563635",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 33620872,
            "range": "± 1077277",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 66749009,
            "range": "± 321597",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 135859850,
            "range": "± 605452",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 271579558,
            "range": "± 1031239",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 543214772,
            "range": "± 1599093",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 212574,
            "range": "± 43787",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1959896,
            "range": "± 142199",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 24513786,
            "range": "± 1324578",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 97114859,
            "range": "± 4391535",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1258,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 55936,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 2230821,
            "range": "± 53216",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 14393719,
            "range": "± 185300",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 30,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 159,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 182,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "15d434f7945ade8c1a52d92c55531ea795bdf747",
          "message": "chore: Remove not needed files (#1224)\n\nRemove not needed files\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-27T00:11:25+08:00",
          "tree_id": "71e67eaab3a43c8ad94c613c7ee35290bef994d1",
          "url": "https://github.com/datafuselabs/opendal/commit/15d434f7945ade8c1a52d92c55531ea795bdf747"
        },
        "date": 1674751529741,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 383645,
            "range": "± 14838",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 348111,
            "range": "± 1068",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 84075,
            "range": "± 14267",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 948787,
            "range": "± 74307",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 14389153,
            "range": "± 1810675",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 55600042,
            "range": "± 1667489",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 105108,
            "range": "± 2850",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1373836,
            "range": "± 161813",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 21282742,
            "range": "± 3172119",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 91681769,
            "range": "± 7735232",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 103322,
            "range": "± 5063",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 108012,
            "range": "± 6913",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 178904,
            "range": "± 10945",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 311718,
            "range": "± 10647",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 623514,
            "range": "± 15505",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 547650,
            "range": "± 14515",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 425452,
            "range": "± 28939",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 788041,
            "range": "± 23107",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1596030,
            "range": "± 80281",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 3594680,
            "range": "± 186356",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 9808887,
            "range": "± 1315714",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 10035266,
            "range": "± 548249",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 16304713,
            "range": "± 847546",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 44400472,
            "range": "± 2029693",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 65663720,
            "range": "± 2073436",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 39992739,
            "range": "± 4335848",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 47898852,
            "range": "± 3560210",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 84928500,
            "range": "± 7186989",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 173261346,
            "range": "± 5836102",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 344183659,
            "range": "± 8167785",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1248,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 17410,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 567175,
            "range": "± 3442",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4782682,
            "range": "± 79895",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1964,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 68967,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1994356,
            "range": "± 78268",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 14601599,
            "range": "± 73722",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2344,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 4229,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 8122,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 18240,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 31895,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 118193,
            "range": "± 2478",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 235546,
            "range": "± 510",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 470837,
            "range": "± 827",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 954746,
            "range": "± 7270",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1911487,
            "range": "± 24721",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 3578758,
            "range": "± 175745",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 7462405,
            "range": "± 324647",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 15397078,
            "range": "± 968266",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 29177127,
            "range": "± 1049252",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 56365982,
            "range": "± 2061048",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 29450316,
            "range": "± 77749",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 59008538,
            "range": "± 181646",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 117727861,
            "range": "± 325880",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 235468419,
            "range": "± 4030484",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 480103438,
            "range": "± 3186962",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 297697,
            "range": "± 47475",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 2054869,
            "range": "± 212370",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 26077791,
            "range": "± 1886593",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 104638534,
            "range": "± 9505954",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1272,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 59308,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 2755760,
            "range": "± 135912",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 21517605,
            "range": "± 2060354",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 30,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 163,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 182,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3a791f278af84bd58f9e8f5c73401eebb2a5512e",
          "message": "ci: Remove not needed audit checks (#1226)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-27T01:03:52+08:00",
          "tree_id": "3f9d9bcbec257905f000348545ee88f7ae026cca",
          "url": "https://github.com/datafuselabs/opendal/commit/3a791f278af84bd58f9e8f5c73401eebb2a5512e"
        },
        "date": 1674754146719,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 325884,
            "range": "± 935",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 309882,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 67828,
            "range": "± 10466",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 735992,
            "range": "± 13294",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11506867,
            "range": "± 236393",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 48815075,
            "range": "± 673650",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 90224,
            "range": "± 2290",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1115252,
            "range": "± 39570",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17420248,
            "range": "± 289599",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 73142081,
            "range": "± 1740621",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 89729,
            "range": "± 1469",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 89458,
            "range": "± 8061",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 112577,
            "range": "± 12918",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 225444,
            "range": "± 8716",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 449332,
            "range": "± 10332",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 457197,
            "range": "± 10781",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 292948,
            "range": "± 7245",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 552104,
            "range": "± 19825",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1327100,
            "range": "± 125492",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2243318,
            "range": "± 152730",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 6838574,
            "range": "± 236141",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 6151937,
            "range": "± 541658",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 9259115,
            "range": "± 321450",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 29716343,
            "range": "± 450958",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 60457336,
            "range": "± 5124485",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 30599844,
            "range": "± 913513",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 29852369,
            "range": "± 1757867",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 56650648,
            "range": "± 3150682",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 112634147,
            "range": "± 1647698",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 197239896,
            "range": "± 29109948",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1023,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13254,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 454926,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1900822,
            "range": "± 48382",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1360,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 45670,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1561136,
            "range": "± 41141",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 14650480,
            "range": "± 193577",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1405,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 2774,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 5520,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 11130,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 21839,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 87895,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 175817,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 351125,
            "range": "± 307",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 702377,
            "range": "± 484",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1403989,
            "range": "± 787",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2567478,
            "range": "± 57578",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 5001042,
            "range": "± 98040",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 10062775,
            "range": "± 436793",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 20164613,
            "range": "± 506868",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 39191248,
            "range": "± 979535",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 28038607,
            "range": "± 343341",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 56413390,
            "range": "± 618390",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 113662760,
            "range": "± 5086143",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 231041706,
            "range": "± 4451626",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 457525273,
            "range": "± 4128180",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 201959,
            "range": "± 31130",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1433806,
            "range": "± 35799",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19343920,
            "range": "± 2277258",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 77603916,
            "range": "± 7699869",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 975,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 42482,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1503784,
            "range": "± 6279",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 15322300,
            "range": "± 318195",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 23,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 125,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 152,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b5bf5f42874d3b3be113a4ef4aba79ad83f11d1",
          "message": "cleanup: Move oli and oay into binaries (#1227)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-27T12:24:05+08:00",
          "tree_id": "869ebcc96dd8fbeea365b788eb80e8bbb96e523e",
          "url": "https://github.com/datafuselabs/opendal/commit/1b5bf5f42874d3b3be113a4ef4aba79ad83f11d1"
        },
        "date": 1674794635601,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 353004,
            "range": "± 5489",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 304273,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 68586,
            "range": "± 9058",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 745251,
            "range": "± 13872",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11358789,
            "range": "± 161173",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 48445314,
            "range": "± 858617",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 89689,
            "range": "± 4416",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1115167,
            "range": "± 36952",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17257019,
            "range": "± 267852",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 74067892,
            "range": "± 1739748",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 90233,
            "range": "± 1713",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 76974,
            "range": "± 11928",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 141388,
            "range": "± 20608",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 280701,
            "range": "± 20136",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 450946,
            "range": "± 9691",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 455330,
            "range": "± 8074",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 281254,
            "range": "± 5628",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 555200,
            "range": "± 5118",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1103630,
            "range": "± 20126",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2254734,
            "range": "± 110877",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 6563861,
            "range": "± 118413",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 6061749,
            "range": "± 571892",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 9013207,
            "range": "± 384196",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 29126097,
            "range": "± 753849",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 60080241,
            "range": "± 5316903",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 29023395,
            "range": "± 597176",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 28892524,
            "range": "± 1407171",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 55578393,
            "range": "± 1571374",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 111544825,
            "range": "± 4371589",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 189496046,
            "range": "± 32673482",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1032,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 12435,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 477501,
            "range": "± 334",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1974628,
            "range": "± 28776",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1170,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 49115,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1578259,
            "range": "± 6134",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 14137440,
            "range": "± 160715",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1432,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 2862,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 5575,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 11222,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 22462,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 82693,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 165430,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 330399,
            "range": "± 1208",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 660635,
            "range": "± 587",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1422310,
            "range": "± 1152",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2278144,
            "range": "± 10115",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4289592,
            "range": "± 27398",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 9114361,
            "range": "± 79279",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 18227907,
            "range": "± 77137",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 36539056,
            "range": "± 315739",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 28285797,
            "range": "± 456254",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 56407016,
            "range": "± 727020",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 113359224,
            "range": "± 1398299",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 226274890,
            "range": "± 1888136",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 450054562,
            "range": "± 27239646",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 226789,
            "range": "± 71729",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1290629,
            "range": "± 51068",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19499575,
            "range": "± 2563104",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 75780056,
            "range": "± 10131051",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1035,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 45569,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1566602,
            "range": "± 2764",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 14375995,
            "range": "± 314192",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 132,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 150,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "91d2668186c8efe365afebff2254637e4057b781",
          "message": "cleanup: Move testdata into tests/data (#1228)\n\n* cleanup: Move testdata into tests/data\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Fix ci\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-27T12:55:09+08:00",
          "tree_id": "4e8df2994490acc17bcddb8228aab416a145b1f1",
          "url": "https://github.com/datafuselabs/opendal/commit/91d2668186c8efe365afebff2254637e4057b781"
        },
        "date": 1674796691314,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 347870,
            "range": "± 5702",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 331189,
            "range": "± 753",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 69381,
            "range": "± 2790",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 745238,
            "range": "± 13232",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11446295,
            "range": "± 340029",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 49126770,
            "range": "± 1253615",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 89761,
            "range": "± 3659",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1125554,
            "range": "± 52455",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17479700,
            "range": "± 323200",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 74563625,
            "range": "± 1396160",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 90756,
            "range": "± 2213",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 91382,
            "range": "± 7889",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 123816,
            "range": "± 22627",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 244318,
            "range": "± 31180",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 442166,
            "range": "± 35632",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 466494,
            "range": "± 10681",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 284912,
            "range": "± 39306",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 555141,
            "range": "± 30537",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1099753,
            "range": "± 67008",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2261798,
            "range": "± 169809",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 6691705,
            "range": "± 146927",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 6283283,
            "range": "± 617614",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 9146456,
            "range": "± 808163",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 29816579,
            "range": "± 1804585",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 59703560,
            "range": "± 4339988",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 30369302,
            "range": "± 3192076",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 29060107,
            "range": "± 1250209",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 56129980,
            "range": "± 1572544",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 112115560,
            "range": "± 5330036",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 199200914,
            "range": "± 30416407",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1018,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13352,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 427358,
            "range": "± 387",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1763138,
            "range": "± 27245",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1394,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 46363,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1472142,
            "range": "± 1647",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 13649422,
            "range": "± 116655",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1807,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3605,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 5870,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 11676,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 23625,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 84050,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 168101,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 336978,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 672902,
            "range": "± 608",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1345243,
            "range": "± 589",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2150320,
            "range": "± 13451",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4299362,
            "range": "± 19732",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 8585536,
            "range": "± 50557",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 18173931,
            "range": "± 176769",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 36321785,
            "range": "± 264981",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 29644325,
            "range": "± 1490340",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 59023058,
            "range": "± 767208",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 118111027,
            "range": "± 1552973",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 225228157,
            "range": "± 2115304",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 468517822,
            "range": "± 4271252",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 229475,
            "range": "± 59581",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1348886,
            "range": "± 62235",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19510820,
            "range": "± 2627332",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 76590304,
            "range": "± 8193687",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 979,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 47813,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1765567,
            "range": "± 3979",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 16155356,
            "range": "± 336291",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 132,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 152,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6e45ba0da9befc843a7c5fb1d58f45eba57be795",
          "message": "refactor(layers/metrics): Defer initiation of error counters (#1232)\n\n* Make metrics handler in arc\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* refactor(layers/metrics): Defer initiation of error counters\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-27T15:41:11+08:00",
          "tree_id": "f931b2723cca670831e092c1fbb0637f8c1e6857",
          "url": "https://github.com/datafuselabs/opendal/commit/6e45ba0da9befc843a7c5fb1d58f45eba57be795"
        },
        "date": 1674806527627,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 364246,
            "range": "± 3413",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 347364,
            "range": "± 960",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 80271,
            "range": "± 3681",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 853900,
            "range": "± 16943",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 13149062,
            "range": "± 598256",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 56834269,
            "range": "± 3146005",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 105186,
            "range": "± 2412",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1299405,
            "range": "± 57217",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 20826730,
            "range": "± 1265162",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 85939644,
            "range": "± 3759260",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 105311,
            "range": "± 3361",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 102949,
            "range": "± 6266",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 161186,
            "range": "± 6761",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 308009,
            "range": "± 6475",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 628818,
            "range": "± 24243",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 537898,
            "range": "± 14827",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 412812,
            "range": "± 33861",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 749317,
            "range": "± 34574",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1503658,
            "range": "± 43879",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 3223520,
            "range": "± 139948",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 7771326,
            "range": "± 226238",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 7084948,
            "range": "± 373793",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 13413737,
            "range": "± 818723",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 41211713,
            "range": "± 1366275",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 83579257,
            "range": "± 3662504",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 36054860,
            "range": "± 1622788",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 44016235,
            "range": "± 1784070",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 82640436,
            "range": "± 3164232",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 164052407,
            "range": "± 3770541",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 325829179,
            "range": "± 4843547",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1198,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 15952,
            "range": "± 439",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 556088,
            "range": "± 3713",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4453928,
            "range": "± 49875",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1735,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 64549,
            "range": "± 786",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1647939,
            "range": "± 30904",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 23095899,
            "range": "± 191040",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2205,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3945,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 8833,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 15816,
            "range": "± 454",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 31323,
            "range": "± 890",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 118446,
            "range": "± 893",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 235434,
            "range": "± 2569",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 473519,
            "range": "± 4433",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 942652,
            "range": "± 7452",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1891458,
            "range": "± 21871",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2509007,
            "range": "± 116556",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 5216053,
            "range": "± 177281",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 10254008,
            "range": "± 432519",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 20508849,
            "range": "± 891128",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 40598839,
            "range": "± 1666716",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 43372188,
            "range": "± 427069",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 87155844,
            "range": "± 781260",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 173235543,
            "range": "± 1295360",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 348013376,
            "range": "± 2317881",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 694724177,
            "range": "± 4650660",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 201946,
            "range": "± 43637",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1888580,
            "range": "± 211088",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 25273228,
            "range": "± 2358336",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 101442624,
            "range": "± 3151904",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1238,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 72473,
            "range": "± 695",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1804055,
            "range": "± 73382",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 25224115,
            "range": "± 437363",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 29,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 154,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 173,
            "range": "± 4",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "941c525e1ae520289db3e3bfaa7f81f9b64a2a75",
          "message": "Bump to version 0.25.1 (#1233)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-27T16:12:20+08:00",
          "tree_id": "6cdb36b3bdeb7328aa561dc5547e606822739abb",
          "url": "https://github.com/datafuselabs/opendal/commit/941c525e1ae520289db3e3bfaa7f81f9b64a2a75"
        },
        "date": 1674808244401,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 356262,
            "range": "± 571",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 339835,
            "range": "± 1354",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 69154,
            "range": "± 11122",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 754570,
            "range": "± 12636",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11752716,
            "range": "± 808143",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 49477216,
            "range": "± 2193698",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 92576,
            "range": "± 2102",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1137531,
            "range": "± 51749",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17709197,
            "range": "± 298050",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 74086063,
            "range": "± 1988013",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 90807,
            "range": "± 2407",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 89479,
            "range": "± 6365",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 120786,
            "range": "± 5174",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 263738,
            "range": "± 13172",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 586558,
            "range": "± 30707",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 484681,
            "range": "± 21325",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 291889,
            "range": "± 19945",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 585112,
            "range": "± 15334",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1186168,
            "range": "± 54401",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2420687,
            "range": "± 65828",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 7314719,
            "range": "± 145239",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 6652192,
            "range": "± 510098",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 10907767,
            "range": "± 441647",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 28285595,
            "range": "± 864131",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 53661192,
            "range": "± 1789195",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 31106288,
            "range": "± 495900",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 29662564,
            "range": "± 2275593",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 55242284,
            "range": "± 2789411",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 109188677,
            "range": "± 8528761",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 195593798,
            "range": "± 33953556",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1068,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 14037,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 479168,
            "range": "± 6886",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 2089252,
            "range": "± 47548",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1260,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 50895,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1619565,
            "range": "± 13418",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 14731822,
            "range": "± 92719",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1794,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 2970,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 5942,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 12081,
            "range": "± 362",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 23584,
            "range": "± 563",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 92076,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 183880,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 336666,
            "range": "± 7530",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 673161,
            "range": "± 787",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1344832,
            "range": "± 1405",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2425306,
            "range": "± 85936",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4814248,
            "range": "± 118518",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 9850905,
            "range": "± 280735",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 20650311,
            "range": "± 675623",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 40739291,
            "range": "± 1082043",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 28415467,
            "range": "± 331966",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 54042187,
            "range": "± 456379",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 108406726,
            "range": "± 909743",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 218322315,
            "range": "± 2976917",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 457929306,
            "range": "± 3544199",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 184704,
            "range": "± 54812",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1379564,
            "range": "± 77556",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19295911,
            "range": "± 1913189",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 78542252,
            "range": "± 5426278",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 982,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 55520,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1602122,
            "range": "± 5654",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 15986069,
            "range": "± 211468",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 23,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 124,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 153,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rajivshah1@icloud.com",
            "name": "Rajiv Shah",
            "username": "rajivshah3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47f43bb2a2fddf13b8598164e95fc346c84b252f",
          "message": "fix(services/ghac): Fix log message for `ghac_upload` in `write` (#1239)\n\nSigned-off-by: Rajiv Shah <rajivshah1@icloud.com>",
          "timestamp": "2023-01-28T09:29:47+08:00",
          "tree_id": "ac5004a2f3f75514200b958863c3f51c7c406a30",
          "url": "https://github.com/datafuselabs/opendal/commit/47f43bb2a2fddf13b8598164e95fc346c84b252f"
        },
        "date": 1674870566037,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 320035,
            "range": "± 4833",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 310363,
            "range": "± 1514",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 67138,
            "range": "± 11939",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 723227,
            "range": "± 10934",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 10969732,
            "range": "± 219974",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 46251236,
            "range": "± 717647",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 87009,
            "range": "± 1850",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1092247,
            "range": "± 45272",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17029732,
            "range": "± 246078",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 72076871,
            "range": "± 1256745",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 89712,
            "range": "± 2040",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 84031,
            "range": "± 4144",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 138178,
            "range": "± 6598",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 291891,
            "range": "± 9295",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 578757,
            "range": "± 23798",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 455190,
            "range": "± 11506",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 348626,
            "range": "± 5281",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 686772,
            "range": "± 29700",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1344804,
            "range": "± 46706",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2704433,
            "range": "± 143320",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 6547100,
            "range": "± 329984",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 5988120,
            "range": "± 417219",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 12796355,
            "range": "± 1168857",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 37575219,
            "range": "± 1323424",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 74374423,
            "range": "± 3663327",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 30837209,
            "range": "± 455293",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 41081485,
            "range": "± 2590041",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 71994305,
            "range": "± 1916983",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 146128706,
            "range": "± 2891839",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 285734869,
            "range": "± 7562868",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1073,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 12503,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 496090,
            "range": "± 442",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4158301,
            "range": "± 50140",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1352,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 58833,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1597595,
            "range": "± 6271",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 21107920,
            "range": "± 116728",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2047,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3992,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6937,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 13820,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 27282,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 107461,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 214859,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 429352,
            "range": "± 342",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 858690,
            "range": "± 578",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1716856,
            "range": "± 1707",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2496110,
            "range": "± 61913",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4959233,
            "range": "± 166864",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 9914143,
            "range": "± 280414",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 20008791,
            "range": "± 532417",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 39727174,
            "range": "± 1191124",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 38847329,
            "range": "± 175759",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 77513855,
            "range": "± 273775",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 151407303,
            "range": "± 471119",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 303341913,
            "range": "± 802964",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 606626099,
            "range": "± 1346474",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 150873,
            "range": "± 96866",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1352826,
            "range": "± 81148",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 20901245,
            "range": "± 3749959",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 76968345,
            "range": "± 14802100",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1185,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 44810,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1566539,
            "range": "± 13847",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 22368991,
            "range": "± 343270",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 25,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 133,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 149,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "psiace@ritelabs.net",
            "name": "Chojan Shang",
            "username": "PsiACE"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ce9c53c312f6b8079997eaeab09aff0b0d46a24d",
          "message": "docs(http): remove out-dated comments (#1240)\n\ndocs: remove out-dated comments\r\n\r\nSigned-off-by: Chojan Shang <psiace@outlook.com>",
          "timestamp": "2023-01-28T12:20:40+08:00",
          "tree_id": "70dd66b4364ae4d83c099b1b520c1d0ad521f677",
          "url": "https://github.com/datafuselabs/opendal/commit/ce9c53c312f6b8079997eaeab09aff0b0d46a24d"
        },
        "date": 1674880803222,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 318162,
            "range": "± 415",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 306157,
            "range": "± 1151",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 66700,
            "range": "± 2419",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 726937,
            "range": "± 19523",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11043442,
            "range": "± 350863",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 47286924,
            "range": "± 655803",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 88176,
            "range": "± 5533",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1096507,
            "range": "± 40499",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 16952749,
            "range": "± 380959",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 72552657,
            "range": "± 1240992",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 89295,
            "range": "± 1338",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 82159,
            "range": "± 9148",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 136636,
            "range": "± 3574",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 272790,
            "range": "± 11237",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 551224,
            "range": "± 12081",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 461754,
            "range": "± 9660",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 354999,
            "range": "± 23535",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 663381,
            "range": "± 26660",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1329667,
            "range": "± 78863",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2892684,
            "range": "± 143645",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 6545200,
            "range": "± 213764",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 5835078,
            "range": "± 408346",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 12766827,
            "range": "± 871920",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 33096046,
            "range": "± 1904539",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 64886732,
            "range": "± 1799872",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 32663345,
            "range": "± 534984",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 37937260,
            "range": "± 1956558",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 71691076,
            "range": "± 3953217",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 145596953,
            "range": "± 2845274",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 293763648,
            "range": "± 20196905",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1041,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13991,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 498500,
            "range": "± 3355",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4302468,
            "range": "± 167524",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1350,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 59463,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1760754,
            "range": "± 79093",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 22093055,
            "range": "± 200883",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1765,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3948,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6863,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 13645,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 26760,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 104921,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 209598,
            "range": "± 395",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 418909,
            "range": "± 529",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 837815,
            "range": "± 2997",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1676703,
            "range": "± 3692",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2988039,
            "range": "± 107024",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 7024999,
            "range": "± 264711",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 13460921,
            "range": "± 538387",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 26683279,
            "range": "± 976738",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 54107972,
            "range": "± 1647481",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 40112474,
            "range": "± 202272",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 80308202,
            "range": "± 542616",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 160955056,
            "range": "± 1296557",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 320981392,
            "range": "± 2789979",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 635926494,
            "range": "± 2326088",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 164990,
            "range": "± 64276",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1234656,
            "range": "± 257255",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 20676674,
            "range": "± 3938695",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 81445853,
            "range": "± 13903533",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1072,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 62760,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1713028,
            "range": "± 71185",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 24617453,
            "range": "± 215367",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 25,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 133,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 149,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c87bf684a08bfa658fe0f09e61225a459d549efa",
          "message": "chore: Make sure oli/oay's cargo.lock is updated (#1241)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-28T12:53:23+08:00",
          "tree_id": "a08f09f065cba682a439f2a03f85e4765bb7045e",
          "url": "https://github.com/datafuselabs/opendal/commit/c87bf684a08bfa658fe0f09e61225a459d549efa"
        },
        "date": 1674882984091,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 350942,
            "range": "± 1616",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 333943,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 68402,
            "range": "± 7277",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 741138,
            "range": "± 15551",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11510866,
            "range": "± 507531",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 48244764,
            "range": "± 775777",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 89500,
            "range": "± 6646",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1107987,
            "range": "± 27941",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17493590,
            "range": "± 382869",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 72777842,
            "range": "± 2295864",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 88933,
            "range": "± 15714",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 88271,
            "range": "± 8857",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 124571,
            "range": "± 10488",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 241527,
            "range": "± 10533",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 456187,
            "range": "± 18796",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 448366,
            "range": "± 17356",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 276202,
            "range": "± 4309",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 539461,
            "range": "± 35202",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1092110,
            "range": "± 40036",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2338776,
            "range": "± 132771",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 6787027,
            "range": "± 249136",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 5407046,
            "range": "± 377635",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 9642018,
            "range": "± 638229",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 21569115,
            "range": "± 524588",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 50728231,
            "range": "± 674896",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 30120492,
            "range": "± 599204",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 29283580,
            "range": "± 1297383",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 58572832,
            "range": "± 2872955",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 112033007,
            "range": "± 2295751",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 189618611,
            "range": "± 30205703",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1053,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 12879,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 431640,
            "range": "± 366",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1950198,
            "range": "± 52849",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1260,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 48198,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1631767,
            "range": "± 13054",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 13825097,
            "range": "± 154106",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1574,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3062,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6170,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 12408,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 28703,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 90113,
            "range": "± 612",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 180313,
            "range": "± 355",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 360217,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 720686,
            "range": "± 743",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1440898,
            "range": "± 12025",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2146783,
            "range": "± 80224",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4249517,
            "range": "± 100104",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 8444593,
            "range": "± 185080",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 16950503,
            "range": "± 381753",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 33432594,
            "range": "± 519747",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 29162627,
            "range": "± 228179",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 58769761,
            "range": "± 615853",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 117496423,
            "range": "± 901995",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 233854927,
            "range": "± 1539467",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 465485738,
            "range": "± 4236333",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 235586,
            "range": "± 47596",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1229666,
            "range": "± 106547",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 20591934,
            "range": "± 3564841",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 80494573,
            "range": "± 15457350",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 993,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 41579,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 2000442,
            "range": "± 3596",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 15038044,
            "range": "± 279376",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/trim_start_matches",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/chars",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_string",
            "value": 123,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "build_abs_path/concat_with_format",
            "value": 153,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3066afc6c38deed17f35cb11ed6fc2129aa60379",
          "message": "refacor(services/fs): Make normalized path check optional (#1242)\n\n* Remove not needed benches\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* refacor(services/fs): Make normalized path check optional\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n---------\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-28T16:16:51+08:00",
          "tree_id": "7701116183edea43e79415896631873ce4dc3e5a",
          "url": "https://github.com/datafuselabs/opendal/commit/3066afc6c38deed17f35cb11ed6fc2129aa60379"
        },
        "date": 1674894895033,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 328094,
            "range": "± 5728",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 336921,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 88595,
            "range": "± 8726",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 769676,
            "range": "± 19079",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11687301,
            "range": "± 189358",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 48113999,
            "range": "± 2658491",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 87601,
            "range": "± 1575",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1097366,
            "range": "± 52776",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17280704,
            "range": "± 249919",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 72492047,
            "range": "± 1406928",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 86851,
            "range": "± 1443",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 88133,
            "range": "± 5456",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 138061,
            "range": "± 11716",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 223869,
            "range": "± 18601",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 500845,
            "range": "± 21533",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 468838,
            "range": "± 9463",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 295595,
            "range": "± 10038",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 563517,
            "range": "± 35759",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1153733,
            "range": "± 57788",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2370500,
            "range": "± 52512",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 7076767,
            "range": "± 105789",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 6455813,
            "range": "± 533397",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 10255133,
            "range": "± 584023",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 31759408,
            "range": "± 1533685",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 63338582,
            "range": "± 5526320",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 31063393,
            "range": "± 481340",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 30251078,
            "range": "± 2773863",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 57428961,
            "range": "± 2965033",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 114798782,
            "range": "± 3536267",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 198277458,
            "range": "± 31782685",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1029,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 12917,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 471627,
            "range": "± 587",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 2025905,
            "range": "± 57822",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1464,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 48575,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1517579,
            "range": "± 16812",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 13487719,
            "range": "± 1903445",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1736,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 2963,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 5698,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 13217,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 22905,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 90891,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 171556,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 343020,
            "range": "± 460",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 686042,
            "range": "± 3769",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1371405,
            "range": "± 25123",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2389881,
            "range": "± 43482",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4845134,
            "range": "± 165617",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 9594944,
            "range": "± 213445",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 20225371,
            "range": "± 1001893",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 40938358,
            "range": "± 1848685",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 30400434,
            "range": "± 195794",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 61149731,
            "range": "± 507750",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 122624991,
            "range": "± 744377",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 244131441,
            "range": "± 1339896",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 485129170,
            "range": "± 3688793",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 177897,
            "range": "± 75336",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1472539,
            "range": "± 78650",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19373554,
            "range": "± 1897326",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 78381383,
            "range": "± 6460643",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1014,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 43064,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1627504,
            "range": "± 10876",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 17317593,
            "range": "± 215737",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ee0f8d7b9a62e92de57f3d34f1dca390772d14a",
          "message": "feat: Add basic object_store support (#1243)\n\n* Save work\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* feat: Add basic object_store support\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Add CI\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n---------\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-28T17:06:17+08:00",
          "tree_id": "12cb5d6e6fc6ca3b32f3e9be44382694073ed291",
          "url": "https://github.com/datafuselabs/opendal/commit/6ee0f8d7b9a62e92de57f3d34f1dca390772d14a"
        },
        "date": 1674898053533,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 395661,
            "range": "± 20006",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 379467,
            "range": "± 19718",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 124403,
            "range": "± 21214",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 992678,
            "range": "± 279527",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 15661412,
            "range": "± 1576768",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 61940104,
            "range": "± 21484926",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 122337,
            "range": "± 19109",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1537340,
            "range": "± 158011",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 25553435,
            "range": "± 4210779",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 100343968,
            "range": "± 19963852",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 123330,
            "range": "± 25764",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 123760,
            "range": "± 35889",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 175171,
            "range": "± 19466",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 343021,
            "range": "± 35047",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 715331,
            "range": "± 39328",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 682048,
            "range": "± 130887",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 671676,
            "range": "± 97622",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 946868,
            "range": "± 203557",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1771635,
            "range": "± 125298",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 3925710,
            "range": "± 389293",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 10700085,
            "range": "± 1378477",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 8490193,
            "range": "± 1899516",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 17197952,
            "range": "± 1229110",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 47123829,
            "range": "± 2249624",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 91468932,
            "range": "± 5490208",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 45029500,
            "range": "± 6276839",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 54051584,
            "range": "± 5990232",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 92403891,
            "range": "± 4701831",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 187290239,
            "range": "± 7215309",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 365546477,
            "range": "± 10650857",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1544,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 33154,
            "range": "± 1511",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 495805,
            "range": "± 23179",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 3177499,
            "range": "± 572002",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 2219,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 96854,
            "range": "± 5254",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1945897,
            "range": "± 124454",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 23593029,
            "range": "± 1487511",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2797,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 4879,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 10774,
            "range": "± 683",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 19244,
            "range": "± 574",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 42995,
            "range": "± 2225",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 137190,
            "range": "± 7290",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 268467,
            "range": "± 13588",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 550425,
            "range": "± 27139",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 1081321,
            "range": "± 47733",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 2150611,
            "range": "± 100630",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 3961291,
            "range": "± 421540",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 8025934,
            "range": "± 1020326",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 15142765,
            "range": "± 1864116",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 31325173,
            "range": "± 3579384",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 68304730,
            "range": "± 8075001",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 49406068,
            "range": "± 1903907",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 98266492,
            "range": "± 3779359",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 197213285,
            "range": "± 4587512",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 398855236,
            "range": "± 8528221",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 794149371,
            "range": "± 13674992",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 376931,
            "range": "± 109801",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 2472729,
            "range": "± 260950",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 29512799,
            "range": "± 2627283",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 116309869,
            "range": "± 10004072",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1542,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 95400,
            "range": "± 6154",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 2674792,
            "range": "± 160927",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 30321558,
            "range": "± 1285408",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "663672db354ab83015a1939ddecf0cfe4045ae8a",
          "message": "docs: Add bindings in README (#1244)\n\n* docs: Add bindings in README\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Add readme for bindings\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n---------\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-28T17:32:45+08:00",
          "tree_id": "64cf991122b5dae95d153c82b9d0a7dd13fab0ff",
          "url": "https://github.com/datafuselabs/opendal/commit/663672db354ab83015a1939ddecf0cfe4045ae8a"
        },
        "date": 1674899431822,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 323258,
            "range": "± 10643",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 332520,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 86750,
            "range": "± 16022",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 760559,
            "range": "± 14739",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11334075,
            "range": "± 146922",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 48091453,
            "range": "± 911629",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 87925,
            "range": "± 8661",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1115706,
            "range": "± 91705",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17113629,
            "range": "± 301225",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 73179184,
            "range": "± 1383010",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 88127,
            "range": "± 3018",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 77970,
            "range": "± 12016",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 115190,
            "range": "± 21671",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 274208,
            "range": "± 29093",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 435901,
            "range": "± 50075",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 445744,
            "range": "± 5853",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 281669,
            "range": "± 27539",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 537594,
            "range": "± 4033",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1090248,
            "range": "± 61672",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2232312,
            "range": "± 36595",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 6607679,
            "range": "± 291621",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 6065326,
            "range": "± 471780",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 8926726,
            "range": "± 328409",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 28116913,
            "range": "± 1441293",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 58514633,
            "range": "± 2903967",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 28904692,
            "range": "± 481046",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 28832845,
            "range": "± 1015275",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 55305141,
            "range": "± 1234637",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 111137370,
            "range": "± 4172088",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 188104943,
            "range": "± 35003308",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1088,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 12919,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 432721,
            "range": "± 1132",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1752777,
            "range": "± 15363",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1378,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 45614,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1397660,
            "range": "± 1771",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 12905778,
            "range": "± 144945",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1723,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 2893,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 5689,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 11319,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 26447,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 88904,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 178462,
            "range": "± 431",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 356010,
            "range": "± 790",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 711115,
            "range": "± 459",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1422318,
            "range": "± 908",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2257488,
            "range": "± 2738",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4514279,
            "range": "± 9168",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 9022552,
            "range": "± 21410",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 17209586,
            "range": "± 48326",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 34424523,
            "range": "± 53773",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 27069613,
            "range": "± 306832",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 55987049,
            "range": "± 890834",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 112107003,
            "range": "± 757202",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 225138260,
            "range": "± 1588583",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 448813981,
            "range": "± 2912136",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 166973,
            "range": "± 118186",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1377848,
            "range": "± 31864",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19594463,
            "range": "± 2329379",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 76058634,
            "range": "± 8937676",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 941,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 43355,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1623947,
            "range": "± 1184",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 14942188,
            "range": "± 262264",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2cdb26b81f1afef85cac6632f7718e0267016082",
          "message": "chore: Fix binding of object_store (#1245)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-28T17:36:13+08:00",
          "tree_id": "bc117ee7a914c77ddeded187638b70ec163f2934",
          "url": "https://github.com/datafuselabs/opendal/commit/2cdb26b81f1afef85cac6632f7718e0267016082"
        },
        "date": 1674900065415,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 340258,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 304588,
            "range": "± 701",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 86626,
            "range": "± 13827",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 767539,
            "range": "± 12218",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11410107,
            "range": "± 169905",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 48870937,
            "range": "± 832022",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 88366,
            "range": "± 1492",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1119365,
            "range": "± 23089",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17060054,
            "range": "± 294398",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 73371924,
            "range": "± 1336342",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 86990,
            "range": "± 1222",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 81099,
            "range": "± 14187",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 143775,
            "range": "± 20357",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 224939,
            "range": "± 23645",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 458719,
            "range": "± 18548",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 444266,
            "range": "± 7782",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 282572,
            "range": "± 41068",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 542478,
            "range": "± 15049",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1081831,
            "range": "± 61907",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2252149,
            "range": "± 223185",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 6564210,
            "range": "± 252418",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 5456515,
            "range": "± 500272",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 8924998,
            "range": "± 206393",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 29343999,
            "range": "± 592999",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 59320693,
            "range": "± 4196002",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 29209018,
            "range": "± 585649",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 29072172,
            "range": "± 2547078",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 56323348,
            "range": "± 2911324",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 111263201,
            "range": "± 7457930",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 187336202,
            "range": "± 33493325",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1061,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 12662,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 440450,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1922731,
            "range": "± 27249",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1361,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 46779,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1564561,
            "range": "± 3661",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 14182701,
            "range": "± 140642",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1785,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3040,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 5869,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 11484,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 22981,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 82548,
            "range": "± 504",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 164319,
            "range": "± 311",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 329725,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 657222,
            "range": "± 783",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1314425,
            "range": "± 1107",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2193777,
            "range": "± 28927",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4604752,
            "range": "± 57006",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 9108416,
            "range": "± 80557",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 18226498,
            "range": "± 225956",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 36366724,
            "range": "± 304143",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 29254992,
            "range": "± 334624",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 56672252,
            "range": "± 797603",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 113197151,
            "range": "± 1001359",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 227448432,
            "range": "± 1970250",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 454168424,
            "range": "± 3358000",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 163162,
            "range": "± 42135",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1406209,
            "range": "± 64897",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19634082,
            "range": "± 2498673",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 74909941,
            "range": "± 11056401",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 985,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 50189,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1631060,
            "range": "± 4247",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 16141272,
            "range": "± 363684",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "17a237f1e0fcf239c43c0d5ed5e070b2176c1afe",
          "message": "feat: Implement webdav support (#1246)\n\n* feat: Implement webdav support\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Fix typo\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Fix temp location\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n---------\n\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-28T19:21:31+08:00",
          "tree_id": "ab9f5f80e56d45ab79a9788443b50b932c0a2913",
          "url": "https://github.com/datafuselabs/opendal/commit/17a237f1e0fcf239c43c0d5ed5e070b2176c1afe"
        },
        "date": 1674906101787,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 406113,
            "range": "± 23722",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 382443,
            "range": "± 27208",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 126955,
            "range": "± 18775",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 983119,
            "range": "± 343390",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 16656003,
            "range": "± 8690977",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 67203556,
            "range": "± 10306951",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 126256,
            "range": "± 17799",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1559410,
            "range": "± 416343",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 24483854,
            "range": "± 4656790",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 104657519,
            "range": "± 25540771",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 128360,
            "range": "± 36861",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 131349,
            "range": "± 23231",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 204710,
            "range": "± 30511",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 335713,
            "range": "± 37290",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 655460,
            "range": "± 54967",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 650943,
            "range": "± 121899",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 675511,
            "range": "± 83683",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 897281,
            "range": "± 85687",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1805511,
            "range": "± 181305",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 3568977,
            "range": "± 250143",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 10022547,
            "range": "± 1551512",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 8750061,
            "range": "± 1663258",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 15029485,
            "range": "± 1941472",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 46001731,
            "range": "± 2410824",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 89327701,
            "range": "± 5805788",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 45015744,
            "range": "± 4519230",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 52945431,
            "range": "± 5736049",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 90788938,
            "range": "± 5863165",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 182615894,
            "range": "± 8429915",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 360109077,
            "range": "± 12892231",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1437,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 34329,
            "range": "± 2019",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 503850,
            "range": "± 35865",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 2717578,
            "range": "± 524052",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 2185,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 95366,
            "range": "± 5940",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 2000136,
            "range": "± 225126",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 11770005,
            "range": "± 498417",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2666,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 5004,
            "range": "± 363",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 9329,
            "range": "± 594",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 19531,
            "range": "± 692",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 37098,
            "range": "± 4561",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 138550,
            "range": "± 8617",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 277030,
            "range": "± 20942",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 547610,
            "range": "± 39542",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 1104303,
            "range": "± 90630",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 2202261,
            "range": "± 153404",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 3212233,
            "range": "± 425529",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 6036374,
            "range": "± 698799",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 12864046,
            "range": "± 1360460",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 24754639,
            "range": "± 3279201",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 50832733,
            "range": "± 5593963",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 19043201,
            "range": "± 860683",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 37948730,
            "range": "± 1852093",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 74848387,
            "range": "± 3849301",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 150303658,
            "range": "± 6912642",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 300776518,
            "range": "± 9256696",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 651840,
            "range": "± 180375",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 2718921,
            "range": "± 381013",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 28697775,
            "range": "± 3720562",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 120197703,
            "range": "± 16402181",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1337,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 97802,
            "range": "± 5254",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 3209402,
            "range": "± 343621",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 19481345,
            "range": "± 1080993",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "07abad34a1ed159cb06b06b1d11af37b7d440331",
          "message": "docs: Add docs for webdav and http services (#1248)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-28T21:14:39+08:00",
          "tree_id": "07f45add141539b3a0056e6a38afad8eeb7bd1fa",
          "url": "https://github.com/datafuselabs/opendal/commit/07abad34a1ed159cb06b06b1d11af37b7d440331"
        },
        "date": 1674913369899,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 401944,
            "range": "± 64902",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 383717,
            "range": "± 25116",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 121546,
            "range": "± 34246",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 1051493,
            "range": "± 104354",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 15961404,
            "range": "± 1865190",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 65523496,
            "range": "± 7830549",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 124071,
            "range": "± 15642",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1543419,
            "range": "± 238599",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 24089401,
            "range": "± 3481133",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 103215718,
            "range": "± 14324755",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 125440,
            "range": "± 21239",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 123886,
            "range": "± 30622",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 169233,
            "range": "± 17290",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 328281,
            "range": "± 30738",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 681498,
            "range": "± 42973",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 637725,
            "range": "± 82939",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 658974,
            "range": "± 109608",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 915519,
            "range": "± 78172",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1815367,
            "range": "± 169389",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 3971152,
            "range": "± 377812",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 9398514,
            "range": "± 2035156",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 7904025,
            "range": "± 1134907",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 14020309,
            "range": "± 1445544",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 44450645,
            "range": "± 2275047",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 89314728,
            "range": "± 5028978",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 44172560,
            "range": "± 3600427",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 50955616,
            "range": "± 6390888",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 92944063,
            "range": "± 8088917",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 180479966,
            "range": "± 8118321",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 357413240,
            "range": "± 10471721",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1404,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 33667,
            "range": "± 2016",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 517811,
            "range": "± 26298",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 2413059,
            "range": "± 277305",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 2227,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 97354,
            "range": "± 11042",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1776755,
            "range": "± 151749",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 22064017,
            "range": "± 814298",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2898,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 5615,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 9781,
            "range": "± 466",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 19064,
            "range": "± 1614",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 38533,
            "range": "± 2290",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 203082,
            "range": "± 11381",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 420330,
            "range": "± 17685",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 850252,
            "range": "± 64099",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 1692286,
            "range": "± 86994",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 3322249,
            "range": "± 177466",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 3407421,
            "range": "± 278282",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 6665818,
            "range": "± 571047",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 13633229,
            "range": "± 1236548",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 28835677,
            "range": "± 3012341",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 54945396,
            "range": "± 4606974",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 48814249,
            "range": "± 1918178",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 96451957,
            "range": "± 3247484",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 197843850,
            "range": "± 7358675",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 388660150,
            "range": "± 7712249",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 780883910,
            "range": "± 13597151",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 636703,
            "range": "± 301934",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 2690428,
            "range": "± 556825",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 30271856,
            "range": "± 5237142",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 119137488,
            "range": "± 10658829",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1470,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 97892,
            "range": "± 8066",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 2236152,
            "range": "± 141040",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 30105858,
            "range": "± 1804224",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cfd5a8a9389f661efc6618f55ef963ab7a61f45f",
          "message": "docs: Add webdav in lib docs (#1249)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-28T21:18:28+08:00",
          "tree_id": "8fb39e6ff30b606205db33c8754a2c8600d954aa",
          "url": "https://github.com/datafuselabs/opendal/commit/cfd5a8a9389f661efc6618f55ef963ab7a61f45f"
        },
        "date": 1674914111599,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 357203,
            "range": "± 2543",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 343215,
            "range": "± 1135",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 100768,
            "range": "± 8969",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 900086,
            "range": "± 72784",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 13213852,
            "range": "± 507159",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 57418736,
            "range": "± 4016096",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 103094,
            "range": "± 2054",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1302114,
            "range": "± 139922",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 20479338,
            "range": "± 3122476",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 89530496,
            "range": "± 3533505",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 109307,
            "range": "± 22191",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 106664,
            "range": "± 6860",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 152783,
            "range": "± 5070",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 316340,
            "range": "± 10076",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 655231,
            "range": "± 27360",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 546729,
            "range": "± 23629",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 411051,
            "range": "± 30860",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 778115,
            "range": "± 33732",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1510159,
            "range": "± 70624",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 3287584,
            "range": "± 353815",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 7620652,
            "range": "± 328656",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 8817141,
            "range": "± 942394",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 15530528,
            "range": "± 1443650",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 43829820,
            "range": "± 2123052",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 82906870,
            "range": "± 4803662",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 35252814,
            "range": "± 662788",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 44058491,
            "range": "± 2256540",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 79699847,
            "range": "± 2434658",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 164053092,
            "range": "± 9852878",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 320492083,
            "range": "± 15278335",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1230,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 15739,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 558133,
            "range": "± 3386",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4429897,
            "range": "± 46631",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1840,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 64707,
            "range": "± 471",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1898748,
            "range": "± 78067",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 22379013,
            "range": "± 138047",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2291,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 4065,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 8169,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 16058,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 32297,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 116482,
            "range": "± 465",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 232305,
            "range": "± 1079",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 463105,
            "range": "± 3119",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 930532,
            "range": "± 4005",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1856245,
            "range": "± 10614",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2939119,
            "range": "± 165272",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 5776544,
            "range": "± 279341",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 11712095,
            "range": "± 449529",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 25845717,
            "range": "± 1212499",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 53070709,
            "range": "± 2914377",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 41971650,
            "range": "± 465558",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 84742584,
            "range": "± 1376793",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 167864050,
            "range": "± 1626717",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 337535933,
            "range": "± 4105752",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 671474979,
            "range": "± 4205027",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 210210,
            "range": "± 41069",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1876348,
            "range": "± 228083",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 24824106,
            "range": "± 1173221",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 101860214,
            "range": "± 5654783",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1288,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 55621,
            "range": "± 639",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 2517302,
            "range": "± 239351",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 25661545,
            "range": "± 702721",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me.ssword@gmail.com",
            "name": "flaneur",
            "username": "flaneur2020"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "06b3bdbe9516612159bff1f1f28ef1d69adf10f2",
          "message": "feat: Allow passing content_type to OSS presign (#1252)\n\n* add content type to op-multipart-write\r\n\r\n* pass content_type in presign oss\r\n\r\n* add presign_write_with\r\n\r\n* Revert \"add content type to op-multipart-write\"\r\n\r\nThis reverts commit c0fe8065cb001db25c5080d1bb1a78847fa639bd.\r\n\r\n* cargo fmt",
          "timestamp": "2023-01-29T19:57:20+08:00",
          "tree_id": "7d4bdd8f4f5f25bb7ad50a7d8df59a05a27de0c9",
          "url": "https://github.com/datafuselabs/opendal/commit/06b3bdbe9516612159bff1f1f28ef1d69adf10f2"
        },
        "date": 1674994499872,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 327337,
            "range": "± 1872",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 309392,
            "range": "± 822",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 85514,
            "range": "± 9640",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 754547,
            "range": "± 19909",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11355189,
            "range": "± 270603",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 53876795,
            "range": "± 9364376",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 88590,
            "range": "± 7141",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1116150,
            "range": "± 26165",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17196035,
            "range": "± 1430998",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 73074976,
            "range": "± 4243400",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 88663,
            "range": "± 1616",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 71966,
            "range": "± 6151",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 138999,
            "range": "± 3505",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 279564,
            "range": "± 9349",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 541382,
            "range": "± 14339",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 453625,
            "range": "± 6610",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 482550,
            "range": "± 19866",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 666646,
            "range": "± 12570",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1302002,
            "range": "± 24492",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2679541,
            "range": "± 46327",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 6650423,
            "range": "± 296344",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 6716799,
            "range": "± 298613",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 11472531,
            "range": "± 1030155",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 37103982,
            "range": "± 824410",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 75585160,
            "range": "± 4227217",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 31449574,
            "range": "± 1863799",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 34636747,
            "range": "± 2155190",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 67693179,
            "range": "± 2630881",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 140043490,
            "range": "± 2878038",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 237369671,
            "range": "± 17699016",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1051,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 12667,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 505699,
            "range": "± 7661",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4300651,
            "range": "± 163536",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1543,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 59299,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 2204948,
            "range": "± 366490",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 13291251,
            "range": "± 90400",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1966,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 4057,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 7950,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 13669,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 27164,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 106796,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 213459,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 428048,
            "range": "± 339",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 853569,
            "range": "± 766",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1711596,
            "range": "± 1797",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2498031,
            "range": "± 108847",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4912930,
            "range": "± 164126",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 10846915,
            "range": "± 898899",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 21535340,
            "range": "± 1361573",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 42466174,
            "range": "± 1703635",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 18699368,
            "range": "± 177580",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 37544154,
            "range": "± 345843",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 74911899,
            "range": "± 708050",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 151299672,
            "range": "± 1453018",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 299976247,
            "range": "± 1977413",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 187983,
            "range": "± 41765",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1493750,
            "range": "± 176030",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 20734791,
            "range": "± 3533748",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 79343983,
            "range": "± 14219166",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1084,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 41449,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1901861,
            "range": "± 36281",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 12723087,
            "range": "± 208426",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d4df7cc877c3106e0913bd33d06c1aa0e64b81a2",
          "message": "feat: Make sure short functions have been inlined (#1253)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-30T02:01:38+08:00",
          "tree_id": "2becfd00f23f5d799b8c7de5aa2d9cb50a5b2a49",
          "url": "https://github.com/datafuselabs/opendal/commit/d4df7cc877c3106e0913bd33d06c1aa0e64b81a2"
        },
        "date": 1675016481277,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 339840,
            "range": "± 28278",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 317253,
            "range": "± 21060",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 97755,
            "range": "± 25776",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 960892,
            "range": "± 281142",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 13229821,
            "range": "± 1496437",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 53845792,
            "range": "± 5194226",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 103203,
            "range": "± 13486",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1323804,
            "range": "± 176922",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 20140638,
            "range": "± 2698110",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 82809077,
            "range": "± 8376840",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 101736,
            "range": "± 29876",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 103187,
            "range": "± 15786",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 159703,
            "range": "± 20008",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 313169,
            "range": "± 34747",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 573815,
            "range": "± 62784",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 560015,
            "range": "± 79608",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 556678,
            "range": "± 60507",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 744276,
            "range": "± 153654",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 1490987,
            "range": "± 98383",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 2986295,
            "range": "± 303714",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 7439215,
            "range": "± 878361",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 6725547,
            "range": "± 1066694",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 12926142,
            "range": "± 1410394",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 35397699,
            "range": "± 3272901",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 77318290,
            "range": "± 6495990",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 34391163,
            "range": "± 5482258",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 41683942,
            "range": "± 4202446",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 77606877,
            "range": "± 4774809",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 152436525,
            "range": "± 7976535",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 298280744,
            "range": "± 12759482",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1141,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 27272,
            "range": "± 1621",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 442664,
            "range": "± 24735",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1872044,
            "range": "± 629839",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1875,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 79537,
            "range": "± 3816",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1589960,
            "range": "± 70474",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 17974775,
            "range": "± 1122431",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2042,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3750,
            "range": "± 340",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 7420,
            "range": "± 467",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 14696,
            "range": "± 1362",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 28998,
            "range": "± 2079",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 113894,
            "range": "± 6398",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 231551,
            "range": "± 20420",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 465375,
            "range": "± 27670",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 943933,
            "range": "± 60643",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1839423,
            "range": "± 122451",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2507411,
            "range": "± 413436",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4888193,
            "range": "± 986466",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 9791146,
            "range": "± 1075416",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 19861987,
            "range": "± 4525048",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 39640025,
            "range": "± 7839531",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 40328901,
            "range": "± 1807751",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 85647769,
            "range": "± 6339371",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 176762536,
            "range": "± 9941851",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 370205309,
            "range": "± 13895925",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 723461791,
            "range": "± 21716706",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 357464,
            "range": "± 83031",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 2153333,
            "range": "± 343147",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 24992734,
            "range": "± 2938794",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 106431775,
            "range": "± 12610081",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1235,
            "range": "± 367",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 92100,
            "range": "± 5516",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1984757,
            "range": "± 182736",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 26276240,
            "range": "± 1544862",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69894d1cbf505e65786896c98ed589951c52cb96",
          "message": "chore(deps): bump amondnet/vercel-action from 25.1.0 to 25.1.1 (#1254)\n\nBumps [amondnet/vercel-action](https://github.com/amondnet/vercel-action) from 25.1.0 to 25.1.1.\r\n- [Release notes](https://github.com/amondnet/vercel-action/releases)\r\n- [Changelog](https://github.com/amondnet/vercel-action/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/amondnet/vercel-action/compare/v25.1.0...v25.1.1)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: amondnet/vercel-action\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-01-30T12:41:46+08:00",
          "tree_id": "faff33a7e0fc59750a7a78654fa00428d0f00897",
          "url": "https://github.com/datafuselabs/opendal/commit/69894d1cbf505e65786896c98ed589951c52cb96"
        },
        "date": 1675054859461,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 329951,
            "range": "± 5592",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 305853,
            "range": "± 1237",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 85207,
            "range": "± 10428",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 741737,
            "range": "± 11929",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 10965123,
            "range": "± 1281822",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 46870467,
            "range": "± 2463601",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 85800,
            "range": "± 1620",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1085050,
            "range": "± 76406",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 16620139,
            "range": "± 273255",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 70790405,
            "range": "± 964592",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 86230,
            "range": "± 9313",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 90069,
            "range": "± 5130",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 132129,
            "range": "± 1690",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 265688,
            "range": "± 7923",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 582593,
            "range": "± 23037",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 148588,
            "range": "± 20598",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 212024,
            "range": "± 3650",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 307310,
            "range": "± 12003",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 524437,
            "range": "± 10430",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1061373,
            "range": "± 31877",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1396309,
            "range": "± 68350",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 2573216,
            "range": "± 151270",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 5390113,
            "range": "± 296054",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 27004425,
            "range": "± 3181102",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 55704216,
            "range": "± 3323738",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 8631670,
            "range": "± 133236",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 22319901,
            "range": "± 500995",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 45930013,
            "range": "± 1335364",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 93901540,
            "range": "± 3096350",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 194719486,
            "range": "± 6432587",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1046,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13122,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 496602,
            "range": "± 1634",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4200346,
            "range": "± 42528",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1280,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 57502,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1601312,
            "range": "± 17441",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 21373284,
            "range": "± 57609",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1997,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3975,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6877,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 15409,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 27094,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 103220,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 205465,
            "range": "± 314",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 410589,
            "range": "± 383",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 821459,
            "range": "± 1204",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1642668,
            "range": "± 2220",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2848725,
            "range": "± 119540",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 5562234,
            "range": "± 221892",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 11078520,
            "range": "± 558603",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 22127953,
            "range": "± 1038056",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 42233717,
            "range": "± 2122676",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 38889587,
            "range": "± 252090",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 77592221,
            "range": "± 495436",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 155499147,
            "range": "± 707161",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 311733386,
            "range": "± 1324446",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 621493424,
            "range": "± 3374052",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 225601,
            "range": "± 63313",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1539563,
            "range": "± 97375",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19455559,
            "range": "± 1205205",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 82175918,
            "range": "± 1179486",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1062,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 42512,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1961214,
            "range": "± 71442",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 22766192,
            "range": "± 211103",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c1f2599a181a59bfdf98fff4f6617106632f8e5f",
          "message": "Bump to version 0.25.2 (#1255)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-30T13:52:50+08:00",
          "tree_id": "29ddf6b4a628b15b82303b1b227b1960f24c2db6",
          "url": "https://github.com/datafuselabs/opendal/commit/c1f2599a181a59bfdf98fff4f6617106632f8e5f"
        },
        "date": 1675059162701,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 368968,
            "range": "± 15664",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 344864,
            "range": "± 11644",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 96764,
            "range": "± 17529",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 827726,
            "range": "± 172088",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 12283504,
            "range": "± 1839380",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 52089367,
            "range": "± 9238070",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 98107,
            "range": "± 12765",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1200633,
            "range": "± 253080",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 18535105,
            "range": "± 7957327",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 79711550,
            "range": "± 12318003",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 98935,
            "range": "± 13150",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 114947,
            "range": "± 19162",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 164214,
            "range": "± 27773",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 313611,
            "range": "± 38490",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 641489,
            "range": "± 65993",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 185412,
            "range": "± 18138",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 272804,
            "range": "± 43495",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 431712,
            "range": "± 34555",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 709018,
            "range": "± 55040",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1441645,
            "range": "± 157682",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1611761,
            "range": "± 295381",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 2931401,
            "range": "± 337660",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 7055696,
            "range": "± 466869",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 30094126,
            "range": "± 1780630",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 60737926,
            "range": "± 2689403",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 9791629,
            "range": "± 649871",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 24347106,
            "range": "± 1298715",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 47310972,
            "range": "± 2053881",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 95808699,
            "range": "± 3826333",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 195478244,
            "range": "± 5841099",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1349,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 30290,
            "range": "± 979",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 477151,
            "range": "± 32116",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 3613960,
            "range": "± 132755",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 2041,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 87023,
            "range": "± 2775",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 2173249,
            "range": "± 114940",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 20320508,
            "range": "± 647163",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2625,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 4579,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 9163,
            "range": "± 440",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 18131,
            "range": "± 405",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 36188,
            "range": "± 1366",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 124946,
            "range": "± 4053",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 249116,
            "range": "± 10176",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 495094,
            "range": "± 15306",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 998349,
            "range": "± 32834",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1990341,
            "range": "± 87042",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 4232385,
            "range": "± 343204",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 8391918,
            "range": "± 453881",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 16818640,
            "range": "± 969940",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 33934702,
            "range": "± 1614394",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 68039826,
            "range": "± 4193095",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 39769930,
            "range": "± 1016662",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 80107548,
            "range": "± 1772047",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 159929440,
            "range": "± 3607353",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 319715757,
            "range": "± 5850827",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 641017141,
            "range": "± 8445019",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 518498,
            "range": "± 144978",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 2207893,
            "range": "± 404437",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 24522401,
            "range": "± 2819622",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 101207301,
            "range": "± 7459664",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1475,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 94661,
            "range": "± 4652",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 2747581,
            "range": "± 92974",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 22722440,
            "range": "± 606860",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "blove694@gmail.com",
            "name": "Kilerd Chan",
            "username": "Kilerd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59b6bb5eab2291f53a6b385c329fa7429c00762d",
          "message": "refactor: remove the duplicated dependency in dev-dependencies (#1257)\n\nrefact: remove the duplicated dependency in dev-dependencies\r\n\r\nCo-authored-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-30T15:20:08+08:00",
          "tree_id": "87ad3b49098947179725f6f7efef78d44c7a6c50",
          "url": "https://github.com/datafuselabs/opendal/commit/59b6bb5eab2291f53a6b385c329fa7429c00762d"
        },
        "date": 1675064505720,
        "tool": "cargo",
        "benches": [
          {
            "name": "into_stream/into_stream",
            "value": 323902,
            "range": "± 8847",
            "unit": "ns/iter"
          },
          {
            "name": "into_stream/raw_reader",
            "value": 324561,
            "range": "± 376",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 87361,
            "range": "± 4647",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 766239,
            "range": "± 10431",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11416258,
            "range": "± 210204",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 48079833,
            "range": "± 684610",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 87760,
            "range": "± 5206",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1111113,
            "range": "± 48320",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17153231,
            "range": "± 207372",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 73267775,
            "range": "± 1222385",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 87937,
            "range": "± 1574",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 82693,
            "range": "± 11057",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 120310,
            "range": "± 6808",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 255715,
            "range": "± 17677",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 501058,
            "range": "± 43490",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 131732,
            "range": "± 3928",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 142430,
            "range": "± 18303",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 299069,
            "range": "± 8747",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 575100,
            "range": "± 50764",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1135348,
            "range": "± 90065",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1225754,
            "range": "± 15932",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 2005535,
            "range": "± 29666",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 3611390,
            "range": "± 218498",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 21613389,
            "range": "± 1185804",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 44518438,
            "range": "± 2530732",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 5996409,
            "range": "± 157464",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 17343208,
            "range": "± 354365",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 34783692,
            "range": "± 1161287",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 69094399,
            "range": "± 2132934",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 136749746,
            "range": "± 5183207",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1013,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13387,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 434155,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1819738,
            "range": "± 37013",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1187,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 46744,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1546195,
            "range": "± 9440",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 14356633,
            "range": "± 158978",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1446,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3304,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 5649,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 11243,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 27276,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 88366,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 176898,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 353520,
            "range": "± 370",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 706752,
            "range": "± 444",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1413232,
            "range": "± 858",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2281344,
            "range": "± 32107",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4608468,
            "range": "± 85683",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 9167743,
            "range": "± 138530",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 18255437,
            "range": "± 206058",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 36547464,
            "range": "± 675952",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 29501533,
            "range": "± 372467",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 58922012,
            "range": "± 658744",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 115497083,
            "range": "± 1682875",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 230122923,
            "range": "± 2545359",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 471537458,
            "range": "± 5323402",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 142146,
            "range": "± 102815",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1212997,
            "range": "± 146466",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 20680096,
            "range": "± 3807183",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 78101505,
            "range": "± 16148899",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 978,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 43417,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1580830,
            "range": "± 3056",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 15409748,
            "range": "± 298413",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2d3a1dc9cb9d73e6cc1e7d5d3f194fafc08d1466",
          "message": "feat: Add benchmarks for blocking_seek operations (#1258)\n\n* Save work\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Add readme\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n---------\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-01-30T16:16:33+08:00",
          "tree_id": "850ef586dd43c1d09260ae6e3cd1bf6bcb053342",
          "url": "https://github.com/datafuselabs/opendal/commit/2d3a1dc9cb9d73e6cc1e7d5d3f194fafc08d1466"
        },
        "date": 1675067829047,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 87644,
            "range": "± 7648",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 760777,
            "range": "± 177366",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11434320,
            "range": "± 860335",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 48069112,
            "range": "± 1070243",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 87614,
            "range": "± 1707",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1108123,
            "range": "± 20549",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17201277,
            "range": "± 338977",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 71611840,
            "range": "± 1328573",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 87325,
            "range": "± 3726",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 75106,
            "range": "± 8999",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 145792,
            "range": "± 8753",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 261266,
            "range": "± 4247",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 527683,
            "range": "± 15975",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 145377,
            "range": "± 3680",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 208026,
            "range": "± 8864",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 306170,
            "range": "± 4954",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 521927,
            "range": "± 22997",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1017719,
            "range": "± 49024",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1428545,
            "range": "± 12675",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 2529999,
            "range": "± 48022",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 4862774,
            "range": "± 212956",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 22529355,
            "range": "± 1081808",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 46158710,
            "range": "± 1927867",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 8905358,
            "range": "± 208363",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 22000482,
            "range": "± 531490",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 44610915,
            "range": "± 1406607",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 89273194,
            "range": "± 2892598",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 183394888,
            "range": "± 4549447",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1040,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 12937,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 496646,
            "range": "± 1672",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4118078,
            "range": "± 46645",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1533,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 57700,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1643967,
            "range": "± 27633",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 21045703,
            "range": "± 159587",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2066,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 4085,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6961,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 14028,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 26658,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 102812,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 206249,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 411953,
            "range": "± 662",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 822733,
            "range": "± 1603",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1645402,
            "range": "± 2588",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2718315,
            "range": "± 119727",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 5427464,
            "range": "± 236531",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 10860999,
            "range": "± 348267",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 22233455,
            "range": "± 953202",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 43739566,
            "range": "± 1158093",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 37339557,
            "range": "± 239103",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 74942192,
            "range": "± 817835",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 152596632,
            "range": "± 1373110",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 303638301,
            "range": "± 3027632",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 601328699,
            "range": "± 5109570",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 223822,
            "range": "± 46468",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1575722,
            "range": "± 104335",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19515511,
            "range": "± 1492627",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 80696798,
            "range": "± 1570135",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1133,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 41523,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1871987,
            "range": "± 49506",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 23494183,
            "range": "± 188883",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "psiace@ritelabs.net",
            "name": "Chojan Shang",
            "username": "PsiACE"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9310cdea3770c1e7073fa525df74e2379aeaaa4f",
          "message": "feat: add dev container (#1261)\n\n* feat: add dev container\r\n\r\nSigned-off-by: Chojan Shang <psiace@outlook.com>\r\n\r\n* chore(license-check): ignore docker\r\n\r\nSigned-off-by: Chojan Shang <psiace@outlook.com>\r\n\r\n* chore: refine docker file\r\n\r\nSigned-off-by: Chojan Shang <psiace@outlook.com>\r\n\r\n* chore: refine and run terminal after open in devcontainer\r\n\r\nSigned-off-by: Chojan Shang <psiace@outlook.com>\r\n\r\n* chore: use root user\r\n\r\nSigned-off-by: Chojan Shang <psiace@outlook.com>\r\n\r\n* chore: refine git config\r\n\r\nSigned-off-by: Chojan Shang <psiace@outlook.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Chojan Shang <psiace@outlook.com>",
          "timestamp": "2023-01-31T11:30:17+08:00",
          "tree_id": "83b03fab84ac846dd81f345ae9b863a151814976",
          "url": "https://github.com/datafuselabs/opendal/commit/9310cdea3770c1e7073fa525df74e2379aeaaa4f"
        },
        "date": 1675137114002,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 105371,
            "range": "± 25091",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 545113,
            "range": "± 203069",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 12789080,
            "range": "± 1174504",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 54431159,
            "range": "± 7024586",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 100290,
            "range": "± 12839",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1262016,
            "range": "± 195389",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 19404647,
            "range": "± 1957376",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 83644296,
            "range": "± 9917462",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 103546,
            "range": "± 19324",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 108298,
            "range": "± 7486",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 169256,
            "range": "± 18188",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 322649,
            "range": "± 25869",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 714871,
            "range": "± 73594",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 190523,
            "range": "± 17246",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 270563,
            "range": "± 14979",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 420949,
            "range": "± 37645",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 723051,
            "range": "± 270390",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1438422,
            "range": "± 115106",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1840901,
            "range": "± 169513",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 3332669,
            "range": "± 368893",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 7758093,
            "range": "± 486243",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 29451998,
            "range": "± 1558463",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 58125003,
            "range": "± 4826177",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 9073177,
            "range": "± 335512",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 22775299,
            "range": "± 947752",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 47122680,
            "range": "± 2652890",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 95803641,
            "range": "± 3202206",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 194640028,
            "range": "± 7210030",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1443,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 29953,
            "range": "± 1292",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 470268,
            "range": "± 24203",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 3646282,
            "range": "± 199273",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 2042,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 87292,
            "range": "± 4133",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 2328729,
            "range": "± 249756",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 18792249,
            "range": "± 1059181",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2580,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 5095,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 8968,
            "range": "± 322",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 17688,
            "range": "± 1539",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 35281,
            "range": "± 1309",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 123894,
            "range": "± 9445",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 246881,
            "range": "± 33336",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 489594,
            "range": "± 26062",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 979145,
            "range": "± 51640",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1947869,
            "range": "± 67528",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 4667559,
            "range": "± 309045",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 9420780,
            "range": "± 630152",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 19378079,
            "range": "± 930628",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 39191656,
            "range": "± 2546421",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 75220021,
            "range": "± 5706453",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 41063696,
            "range": "± 2027284",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 79234487,
            "range": "± 2767951",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 156879875,
            "range": "± 4029776",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 317251776,
            "range": "± 7176198",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 632438103,
            "range": "± 8721090",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 310336,
            "range": "± 123465",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 2494755,
            "range": "± 323332",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 25289278,
            "range": "± 3901668",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 101060258,
            "range": "± 11365304",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1417,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 86171,
            "range": "± 3373",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 2909909,
            "range": "± 260354",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 22875184,
            "range": "± 819251",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "psiace@ritelabs.net",
            "name": "Chojan Shang",
            "username": "PsiACE"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a7d8001cf06ae4bf505b9ecfed6f1bb348b2715",
          "message": "chore: refine devcontainer (#1262)\n\n* chore: refine user\r\n\r\nSigned-off-by: Chojan Shang <psiace@outlook.com>\r\n\r\n* chore: fix premission\r\n\r\nSigned-off-by: Chojan Shang <psiace@outlook.com>\r\n\r\n* chore: add sudo user\r\n\r\nSigned-off-by: Chojan Shang <psiace@outlook.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Chojan Shang <psiace@outlook.com>",
          "timestamp": "2023-01-31T19:55:01+08:00",
          "tree_id": "7f5852d8fbe13567a2dfab690eec8fdc8aa273fc",
          "url": "https://github.com/datafuselabs/opendal/commit/5a7d8001cf06ae4bf505b9ecfed6f1bb348b2715"
        },
        "date": 1675167218462,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 86949,
            "range": "± 3795",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 554766,
            "range": "± 94425",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11342165,
            "range": "± 489116",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 46892849,
            "range": "± 922028",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 84917,
            "range": "± 1766",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1092751,
            "range": "± 67779",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 16594244,
            "range": "± 364061",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 70299353,
            "range": "± 1223896",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 84790,
            "range": "± 1969",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 82363,
            "range": "± 8948",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 113394,
            "range": "± 10137",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 288897,
            "range": "± 33142",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 429650,
            "range": "± 68651",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 129656,
            "range": "± 2700",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 144430,
            "range": "± 12640",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 277229,
            "range": "± 27219",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 592367,
            "range": "± 40562",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1125393,
            "range": "± 53806",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1222145,
            "range": "± 32992",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 2023277,
            "range": "± 179110",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 3526900,
            "range": "± 278305",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 21298612,
            "range": "± 1374810",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 42834974,
            "range": "± 2287439",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 5673501,
            "range": "± 94480",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 17165778,
            "range": "± 436892",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 34168474,
            "range": "± 1197567",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 68386362,
            "range": "± 2009284",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 135448855,
            "range": "± 5544840",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1000,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 12463,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 424748,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1771157,
            "range": "± 22061",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1167,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 46254,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1371960,
            "range": "± 1874",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 12765999,
            "range": "± 275224",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1660,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3379,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 5566,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 10991,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 22535,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 84997,
            "range": "± 678",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 170042,
            "range": "± 2207",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 339632,
            "range": "± 1351",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 679224,
            "range": "± 4087",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1357329,
            "range": "± 5716",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2186159,
            "range": "± 19975",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4383605,
            "range": "± 35092",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 8725819,
            "range": "± 44626",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 17453909,
            "range": "± 153452",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 34927971,
            "range": "± 199500",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 29549839,
            "range": "± 1882361",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 55714477,
            "range": "± 1720083",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 109524845,
            "range": "± 1880321",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 223232542,
            "range": "± 3334533",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 450663829,
            "range": "± 17182230",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 129509,
            "range": "± 50126",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1337903,
            "range": "± 47652",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19686805,
            "range": "± 2367907",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 75547700,
            "range": "± 9887437",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 938,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 43473,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1617923,
            "range": "± 5588",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 14762153,
            "range": "± 435368",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ee47d9679e0a8644651b20f8a56c67c177f8b7eb",
          "message": "feat: Zero Cost OpenDAL (#1260)\n\n* Try to introduce zero cost reader\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Save work\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Save work\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Save work\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Save work\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Save work\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Save work\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Let's build\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Buildable!\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Make cliipy happy\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Save work\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Save work\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Save work\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* We are building now\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Fix build\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Fix clippy\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Fix deps\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Implement type erase\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Fix test\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Fix test\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Better code\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Fix layeed accessor\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Make sure read has been implemented correctly\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Make sure block reader supported\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Fix type eraser reader\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Fix type eraser\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Fix CI\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Fix oay\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Fix format\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Fix test\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Fix unit test\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Fix build\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Fix layer test\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Fix doc test\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* FIx doc test\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Format code\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* We can know of range before\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Fix typo\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Fix ftp backend\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Make clippy happy\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Fix docs\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* FIx typo\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* There are services that neither streamable nor seekable\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n---------\n\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-02-03T22:28:15+08:00",
          "tree_id": "21fe7fab7a94a4eec8356f15932d559b0ca28b43",
          "url": "https://github.com/datafuselabs/opendal/commit/ee47d9679e0a8644651b20f8a56c67c177f8b7eb"
        },
        "date": 1675435846934,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 85166,
            "range": "± 18509",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 754658,
            "range": "± 132239",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11554650,
            "range": "± 315699",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 49026188,
            "range": "± 1243211",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 89482,
            "range": "± 2919",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1130427,
            "range": "± 27511",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17817548,
            "range": "± 288944",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 74594434,
            "range": "± 1367120",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 89189,
            "range": "± 2815",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 90279,
            "range": "± 7851",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 139228,
            "range": "± 12141",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 222409,
            "range": "± 7994",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 466683,
            "range": "± 47889",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 134307,
            "range": "± 2352",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 131390,
            "range": "± 9035",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 298068,
            "range": "± 6667",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 510794,
            "range": "± 9897",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1010824,
            "range": "± 37946",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1201339,
            "range": "± 19718",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 1990875,
            "range": "± 44351",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 3739503,
            "range": "± 286289",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 22331091,
            "range": "± 1030085",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 45489010,
            "range": "± 2776975",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 6103146,
            "range": "± 155048",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 17979148,
            "range": "± 341966",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 34887613,
            "range": "± 1348982",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 70373055,
            "range": "± 2131041",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 138273248,
            "range": "± 4103637",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1087,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13122,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 437836,
            "range": "± 1331",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1853262,
            "range": "± 42770",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1625,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 47143,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1502215,
            "range": "± 5612",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 14181313,
            "range": "± 355928",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1977,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3322,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6531,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 12840,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 25631,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 84761,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 169315,
            "range": "± 352",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 338616,
            "range": "± 412",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 676731,
            "range": "± 2374",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1352988,
            "range": "± 1695",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2228669,
            "range": "± 28934",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4542646,
            "range": "± 68758",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 9126437,
            "range": "± 231483",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 18529203,
            "range": "± 492499",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 36429263,
            "range": "± 685989",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 29742573,
            "range": "± 292866",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 58913915,
            "range": "± 757393",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 118773497,
            "range": "± 1506555",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 238395992,
            "range": "± 1825267",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 475852490,
            "range": "± 4322934",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 223935,
            "range": "± 42097",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1524805,
            "range": "± 82729",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19508801,
            "range": "± 1886396",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 76919346,
            "range": "± 7710788",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1188,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 44694,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1569683,
            "range": "± 10837",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 16410216,
            "range": "± 267990",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zouzou0208@gmail.com",
            "name": "yihong",
            "username": "yihong0618"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c99e08b586da152546d1af7eaa49b99f9cbd3eac",
          "message": "refactor: some code in GitHub Actions (#1269)\n\n* fix: typo for rocksdb comments\r\n\r\n* fix: some actions use services\r\n\r\n* fix: name in ipfs yml, install librocksdb-dev first\r\n\r\n* fix: permission and command\r\n\r\n* fix: ci test\r\n\r\n* fix: back to ipfs\r\n\r\n* fix: do not use default for rocksdb\r\n\r\n* fix: do not run bench for fork repo",
          "timestamp": "2023-02-04T00:14:32+08:00",
          "tree_id": "1e7bdb09c840201551801ba85adda407071f95e1",
          "url": "https://github.com/datafuselabs/opendal/commit/c99e08b586da152546d1af7eaa49b99f9cbd3eac"
        },
        "date": 1675442145877,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 116528,
            "range": "± 12703",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 451391,
            "range": "± 306123",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 14706408,
            "range": "± 2874088",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 60760257,
            "range": "± 5925788",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 118869,
            "range": "± 11756",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1512445,
            "range": "± 162396",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 22595446,
            "range": "± 2829518",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 92755849,
            "range": "± 5954039",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 114364,
            "range": "± 8782",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 123789,
            "range": "± 25942",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 172354,
            "range": "± 20693",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 327329,
            "range": "± 17579",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 722596,
            "range": "± 57132",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 211706,
            "range": "± 27864",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 298350,
            "range": "± 26194",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 448665,
            "range": "± 35533",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 751425,
            "range": "± 63367",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1490983,
            "range": "± 85599",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1938174,
            "range": "± 91381",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 3153322,
            "range": "± 157562",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 5953347,
            "range": "± 589155",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 31072747,
            "range": "± 2131792",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 65143267,
            "range": "± 4462469",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 10288372,
            "range": "± 1160811",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 26372067,
            "range": "± 1126865",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 54691167,
            "range": "± 2225884",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 109855631,
            "range": "± 3650093",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 217399605,
            "range": "± 5551999",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1542,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 32410,
            "range": "± 1000",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 496945,
            "range": "± 16461",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 2113689,
            "range": "± 160741",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1988,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 85992,
            "range": "± 3470",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1795376,
            "range": "± 90067",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 20897541,
            "range": "± 757229",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2618,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 4449,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 8940,
            "range": "± 340",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 17653,
            "range": "± 783",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 35575,
            "range": "± 1419",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 129195,
            "range": "± 5284",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 258149,
            "range": "± 10510",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 512872,
            "range": "± 16985",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 1025913,
            "range": "± 45236",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 2062950,
            "range": "± 84201",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 3222394,
            "range": "± 363448",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 6521928,
            "range": "± 712797",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 13510231,
            "range": "± 1268939",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 26548921,
            "range": "± 3060076",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 51356650,
            "range": "± 6097730",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 46847888,
            "range": "± 1374323",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 94718721,
            "range": "± 2847145",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 188802292,
            "range": "± 4779613",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 376143742,
            "range": "± 6432295",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 751117944,
            "range": "± 11721494",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 430304,
            "range": "± 83442",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 2282386,
            "range": "± 337373",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 27186093,
            "range": "± 2665919",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 113518145,
            "range": "± 11323684",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1554,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 99833,
            "range": "± 3025",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 2025344,
            "range": "± 85465",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 28370716,
            "range": "± 863990",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "45c9cf73badd02f78bb47c2b282635166211ed06",
          "message": "refactor: Don't expose services mod directly (#1271)\n\n* refactor: Don't expose the mod directly\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* FIx test\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n---------\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-02-04T12:16:18+08:00",
          "tree_id": "9abdd5e2f7144410137ca1364fef15026ea28793",
          "url": "https://github.com/datafuselabs/opendal/commit/45c9cf73badd02f78bb47c2b282635166211ed06"
        },
        "date": 1675485819725,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 102917,
            "range": "± 11855",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 847761,
            "range": "± 239795",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 13284105,
            "range": "± 1771217",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 55825124,
            "range": "± 5213839",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 102838,
            "range": "± 10040",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1322587,
            "range": "± 103189",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 21227114,
            "range": "± 4466181",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 87423467,
            "range": "± 16687244",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 102638,
            "range": "± 10774",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 111294,
            "range": "± 10774",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 172966,
            "range": "± 51586",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 337891,
            "range": "± 27312",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 647618,
            "range": "± 42394",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 202907,
            "range": "± 31985",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 286625,
            "range": "± 30677",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 420651,
            "range": "± 25655",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 766443,
            "range": "± 49491",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1531247,
            "range": "± 182413",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1861772,
            "range": "± 147958",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 3083970,
            "range": "± 246433",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 5353050,
            "range": "± 579819",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 30541505,
            "range": "± 2692764",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 67467594,
            "range": "± 3822053",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 11369314,
            "range": "± 819895",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 28613641,
            "range": "± 1612306",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 56318643,
            "range": "± 3609569",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 110914751,
            "range": "± 4706113",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 227705818,
            "range": "± 6028048",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1542,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 32906,
            "range": "± 1945",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 499676,
            "range": "± 25654",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 2197037,
            "range": "± 261951",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1940,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 93352,
            "range": "± 3318",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1862698,
            "range": "± 121408",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 20970765,
            "range": "± 851718",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2619,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 5097,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 9702,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 20213,
            "range": "± 965",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 37274,
            "range": "± 2483",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 132872,
            "range": "± 8666",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 256906,
            "range": "± 17256",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 518068,
            "range": "± 29415",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 1049767,
            "range": "± 48448",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 2105344,
            "range": "± 128254",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 3360635,
            "range": "± 400206",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 6801852,
            "range": "± 746721",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 13756147,
            "range": "± 1731281",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 27254310,
            "range": "± 3672050",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 52734011,
            "range": "± 6753859",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 47517549,
            "range": "± 1786154",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 92979343,
            "range": "± 4664410",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 188655450,
            "range": "± 7685170",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 380839132,
            "range": "± 9052741",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 756239653,
            "range": "± 22605601",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 473024,
            "range": "± 84694",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 2448734,
            "range": "± 309063",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 27281743,
            "range": "± 4001218",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 109217919,
            "range": "± 9008963",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1593,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 92721,
            "range": "± 4951",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 2580424,
            "range": "± 198843",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 29397833,
            "range": "± 1661264",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5d3d19e98d152fc34aec240178005bc30250e35",
          "message": "refactor: Polish Builder API (#1272)\n\n* AccessorBuilder should be public API\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Make sure all builder and backend are prefixed correctly\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Rename to Builder\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Add more doc comments\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n---------\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-02-04T13:57:45+08:00",
          "tree_id": "d91efce37b369b9144167cb655c2505fab0c0a64",
          "url": "https://github.com/datafuselabs/opendal/commit/f5d3d19e98d152fc34aec240178005bc30250e35"
        },
        "date": 1675491382491,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 85065,
            "range": "± 7639",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 746997,
            "range": "± 164856",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11290666,
            "range": "± 769747",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 48022590,
            "range": "± 1454631",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 87052,
            "range": "± 2211",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1103780,
            "range": "± 34865",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 16862811,
            "range": "± 312990",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 71950027,
            "range": "± 1300525",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 86700,
            "range": "± 1556",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 83138,
            "range": "± 8034",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 107878,
            "range": "± 15253",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 223989,
            "range": "± 11433",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 456518,
            "range": "± 41694",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 128434,
            "range": "± 4131",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 138939,
            "range": "± 9975",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 263200,
            "range": "± 7381",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 490331,
            "range": "± 29399",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1057264,
            "range": "± 108821",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1185352,
            "range": "± 33999",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 1917526,
            "range": "± 21751",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 3082168,
            "range": "± 47828",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 20717255,
            "range": "± 963155",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 43642465,
            "range": "± 1906664",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 5793201,
            "range": "± 114824",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 18221742,
            "range": "± 450088",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 34621735,
            "range": "± 1278944",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 69032960,
            "range": "± 2701222",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 136813567,
            "range": "± 5527947",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1088,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 14828,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 435417,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1796184,
            "range": "± 40328",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1267,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 49416,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1454040,
            "range": "± 9950",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 13104000,
            "range": "± 210818",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1790,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3307,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6106,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 12104,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 23934,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 84835,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 169264,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 338350,
            "range": "± 541",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 676943,
            "range": "± 548",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1355170,
            "range": "± 4785",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2264426,
            "range": "± 50024",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4478749,
            "range": "± 55972",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 9121159,
            "range": "± 216984",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 17782152,
            "range": "± 261451",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 35664004,
            "range": "± 378858",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 28371262,
            "range": "± 323189",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 57111727,
            "range": "± 532288",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 114882691,
            "range": "± 926831",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 230121661,
            "range": "± 1653047",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 459283184,
            "range": "± 3277236",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 220109,
            "range": "± 62590",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1410590,
            "range": "± 57680",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19247010,
            "range": "± 2239823",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 78371405,
            "range": "± 7121913",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1190,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 44191,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1677013,
            "range": "± 31207",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 16506394,
            "range": "± 706037",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "75c037801c0228fd02e7589d7a68779f1bf6f9fa",
          "message": "feat: Allow dynamic dispatch layer (#1273)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-02-04T17:32:37+08:00",
          "tree_id": "d6d4c5fda7450d4d9400880a74bfb1cd5d4ca6f0",
          "url": "https://github.com/datafuselabs/opendal/commit/75c037801c0228fd02e7589d7a68779f1bf6f9fa"
        },
        "date": 1675504281589,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 88665,
            "range": "± 11686",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 745368,
            "range": "± 183626",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11687752,
            "range": "± 609111",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 48975059,
            "range": "± 840479",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 89115,
            "range": "± 2478",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1114364,
            "range": "± 53186",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17822609,
            "range": "± 1065892",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 73609086,
            "range": "± 2047374",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 88563,
            "range": "± 2005",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 87392,
            "range": "± 8075",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 108893,
            "range": "± 4959",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 214366,
            "range": "± 14976",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 434117,
            "range": "± 5817",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 134877,
            "range": "± 3217",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 156107,
            "range": "± 15230",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 295154,
            "range": "± 7587",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 530800,
            "range": "± 60637",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1147652,
            "range": "± 73634",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1203304,
            "range": "± 29791",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 2130049,
            "range": "± 45923",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 3633870,
            "range": "± 394280",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 21948416,
            "range": "± 1215323",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 44983025,
            "range": "± 3565916",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 5939884,
            "range": "± 171159",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 17639079,
            "range": "± 381185",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 34573207,
            "range": "± 1254261",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 69107427,
            "range": "± 3040258",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 135029034,
            "range": "± 5218598",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1132,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13485,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 435481,
            "range": "± 738",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1821192,
            "range": "± 61194",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1611,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 45633,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1503775,
            "range": "± 18213",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 13232142,
            "range": "± 195833",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1727,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3165,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6185,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 12049,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 24672,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 84721,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 169346,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 338655,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 676552,
            "range": "± 530",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1352993,
            "range": "± 12235",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2195749,
            "range": "± 27374",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4378311,
            "range": "± 50466",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 8753755,
            "range": "± 89271",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 17512225,
            "range": "± 250498",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 35126803,
            "range": "± 566293",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 28163597,
            "range": "± 351821",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 56506076,
            "range": "± 672166",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 113434722,
            "range": "± 1293886",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 225334668,
            "range": "± 3096788",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 457586660,
            "range": "± 3066539",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 234832,
            "range": "± 59927",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1396794,
            "range": "± 76319",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19014659,
            "range": "± 2287863",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 77155634,
            "range": "± 7957085",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1259,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 44721,
            "range": "± 360",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1599662,
            "range": "± 3311",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 15090363,
            "range": "± 351035",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "50c2608f5e481820038e5f8ad4596ef7cac6ac6e",
          "message": "Bump to version 0.26.0 (#1274)\n\n* Bump to version 0.26.0\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Update changelog\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n---------\n\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-02-04T18:05:17+08:00",
          "tree_id": "41899abcca4f3ea94bc764b2278e5f55d63f8a45",
          "url": "https://github.com/datafuselabs/opendal/commit/50c2608f5e481820038e5f8ad4596ef7cac6ac6e"
        },
        "date": 1675506242245,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 84030,
            "range": "± 7431",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 724886,
            "range": "± 139952",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 10924643,
            "range": "± 560213",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 46474133,
            "range": "± 792709",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 84814,
            "range": "± 1279",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1064313,
            "range": "± 51585",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 16419374,
            "range": "± 230614",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 71602557,
            "range": "± 1321259",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 85356,
            "range": "± 1496",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 85131,
            "range": "± 8752",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 140132,
            "range": "± 18698",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 218618,
            "range": "± 16793",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 439491,
            "range": "± 21075",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 127303,
            "range": "± 2900",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 150964,
            "range": "± 12628",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 289125,
            "range": "± 14380",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 553582,
            "range": "± 61631",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1093615,
            "range": "± 64896",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1285527,
            "range": "± 14614",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 2008895,
            "range": "± 34896",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 3301922,
            "range": "± 77033",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 21361133,
            "range": "± 1128137",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 43540496,
            "range": "± 1896762",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 5368571,
            "range": "± 128946",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 16655011,
            "range": "± 490527",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 33569088,
            "range": "± 1114638",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 67469247,
            "range": "± 11691174",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 144049208,
            "range": "± 7469448",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1171,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13374,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 426767,
            "range": "± 1041",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 2135275,
            "range": "± 168435",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1330,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 46175,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1440587,
            "range": "± 19927",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 14812986,
            "range": "± 280608",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1853,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3104,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6062,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 11978,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 24116,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 84180,
            "range": "± 1235",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 167894,
            "range": "± 1022",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 333679,
            "range": "± 1364",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 670813,
            "range": "± 2302",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1341236,
            "range": "± 4026",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2534237,
            "range": "± 66420",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4968984,
            "range": "± 139644",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 9377011,
            "range": "± 400147",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 19897315,
            "range": "± 544111",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 39100086,
            "range": "± 1335342",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 31161289,
            "range": "± 673414",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 62202134,
            "range": "± 1204881",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 115275179,
            "range": "± 3868406",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 239590253,
            "range": "± 19663829",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 463193474,
            "range": "± 14411251",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 227171,
            "range": "± 53979",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1384300,
            "range": "± 100369",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19026556,
            "range": "± 2529620",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 77328836,
            "range": "± 7711662",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1109,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 41378,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 2016262,
            "range": "± 1522",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 15926481,
            "range": "± 273236",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ce42ae7f60452e6149acfb3a5bf856ea18fac495",
          "message": "docs: Add v0.26 upgrade guide (#1276)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-02-04T18:58:46+08:00",
          "tree_id": "e1438fd6318b57239f24a62cda6b65147f17bdb5",
          "url": "https://github.com/datafuselabs/opendal/commit/ce42ae7f60452e6149acfb3a5bf856ea18fac495"
        },
        "date": 1675509448339,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 85178,
            "range": "± 19198",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 756282,
            "range": "± 18279",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11320349,
            "range": "± 242389",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 47803351,
            "range": "± 901679",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 87591,
            "range": "± 1630",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1095790,
            "range": "± 25529",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 16874135,
            "range": "± 558185",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 72274048,
            "range": "± 1688538",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 87955,
            "range": "± 1677",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 87804,
            "range": "± 8228",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 111992,
            "range": "± 10200",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 224935,
            "range": "± 3582",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 522647,
            "range": "± 10132",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 128744,
            "range": "± 2244",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 139829,
            "range": "± 12033",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 293886,
            "range": "± 14847",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 565715,
            "range": "± 58988",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1094527,
            "range": "± 117562",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1137074,
            "range": "± 26293",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 1895776,
            "range": "± 39380",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 3068503,
            "range": "± 121426",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 20543666,
            "range": "± 1136891",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 43887499,
            "range": "± 2256244",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 5825355,
            "range": "± 124454",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 17599749,
            "range": "± 414806",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 34608770,
            "range": "± 1386912",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 69054097,
            "range": "± 1859421",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 133703395,
            "range": "± 4510335",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1139,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13744,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 467714,
            "range": "± 361",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1893120,
            "range": "± 19633",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1394,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 47938,
            "range": "± 255",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1465130,
            "range": "± 1331",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 12828812,
            "range": "± 158560",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1884,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3222,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6495,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 12513,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 25981,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 85740,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 172069,
            "range": "± 238",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 342848,
            "range": "± 5312",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 685970,
            "range": "± 1391",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1373406,
            "range": "± 1145",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2452559,
            "range": "± 19904",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4889749,
            "range": "± 26203",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 9781358,
            "range": "± 50973",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 19575233,
            "range": "± 166069",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 39119799,
            "range": "± 190337",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 28330174,
            "range": "± 382892",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 56686384,
            "range": "± 792339",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 113475341,
            "range": "± 1206165",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 234640398,
            "range": "± 2400236",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 476364576,
            "range": "± 5238970",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 209664,
            "range": "± 159053",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1405703,
            "range": "± 42358",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19598183,
            "range": "± 2266313",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 76499648,
            "range": "± 8515721",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1123,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 42547,
            "range": "± 735",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1695308,
            "range": "± 1801",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 14681181,
            "range": "± 401716",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc8e37a7dc22ada2e9520fb2f044e967bb4158fa",
          "message": "docs: Add feature sets in services (#1277)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-02-04T21:17:12+08:00",
          "tree_id": "edb080a637c5b44eb26b68941c1ccd893b4bdffc",
          "url": "https://github.com/datafuselabs/opendal/commit/bc8e37a7dc22ada2e9520fb2f044e967bb4158fa"
        },
        "date": 1675518340226,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 62270,
            "range": "± 13901",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 744537,
            "range": "± 9909",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11096590,
            "range": "± 293539",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 46412601,
            "range": "± 661296",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 86366,
            "range": "± 1331",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1085517,
            "range": "± 48891",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 16689535,
            "range": "± 246830",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 70963826,
            "range": "± 2062948",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 86747,
            "range": "± 1425",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 93073,
            "range": "± 3990",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 145369,
            "range": "± 5107",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 302704,
            "range": "± 14999",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 543458,
            "range": "± 10006",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 144169,
            "range": "± 3522",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 216662,
            "range": "± 2556",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 314977,
            "range": "± 6487",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 536530,
            "range": "± 30827",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1045372,
            "range": "± 38200",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1350120,
            "range": "± 15386",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 2471135,
            "range": "± 80132",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 5066905,
            "range": "± 214922",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 27546923,
            "range": "± 1086689",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 54882641,
            "range": "± 3173184",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 9190649,
            "range": "± 181202",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 24175395,
            "range": "± 743271",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 48260190,
            "range": "± 1142066",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 98521348,
            "range": "± 3109483",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 198771110,
            "range": "± 5671372",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1187,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13163,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 497055,
            "range": "± 889",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4212380,
            "range": "± 98735",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1618,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 58736,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1602184,
            "range": "± 34740",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 21427517,
            "range": "± 98630",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2068,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3630,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 7115,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 14070,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 27845,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 105066,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 210325,
            "range": "± 441",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 419971,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 843822,
            "range": "± 1802",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1681344,
            "range": "± 3199",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2935233,
            "range": "± 177982",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 6213861,
            "range": "± 442927",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 12452309,
            "range": "± 558999",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 24517467,
            "range": "± 1116539",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 47107394,
            "range": "± 2165816",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 39813763,
            "range": "± 204905",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 79473693,
            "range": "± 413084",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 159248164,
            "range": "± 820774",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 315625275,
            "range": "± 984807",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 634713705,
            "range": "± 3320525",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 230075,
            "range": "± 64828",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1480538,
            "range": "± 44889",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19553774,
            "range": "± 552089",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 82975952,
            "range": "± 1234757",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1241,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 40334,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1951795,
            "range": "± 109952",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 23866840,
            "range": "± 178380",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ae3081110b53d82ad84283f7a3fe884b0cc593f",
          "message": "refactor: Remove not used layer subdir (#1280)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-02-05T11:18:44+08:00",
          "tree_id": "6e82a59d227ff89cda968ed9973ae3a1953c8da1",
          "url": "https://github.com/datafuselabs/opendal/commit/8ae3081110b53d82ad84283f7a3fe884b0cc593f"
        },
        "date": 1675568760123,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 96104,
            "range": "± 17340",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 445394,
            "range": "± 191069",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 12271614,
            "range": "± 2574669",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 47087105,
            "range": "± 6265190",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 99517,
            "range": "± 14221",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1072539,
            "range": "± 138242",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 18333621,
            "range": "± 1929149",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 71748784,
            "range": "± 7068403",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 100193,
            "range": "± 10548",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 109723,
            "range": "± 11089",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 149898,
            "range": "± 17666",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 304898,
            "range": "± 30045",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 627404,
            "range": "± 66666",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 170173,
            "range": "± 13648",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 246860,
            "range": "± 13518",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 383779,
            "range": "± 16641",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 651391,
            "range": "± 50452",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1356621,
            "range": "± 181586",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1599840,
            "range": "± 72373",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 2833261,
            "range": "± 236320",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 6099033,
            "range": "± 394915",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 27102529,
            "range": "± 1579894",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 56749556,
            "range": "± 5235606",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 8663750,
            "range": "± 409461",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 20629436,
            "range": "± 912146",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 41250138,
            "range": "± 1549414",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 85829479,
            "range": "± 3362030",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 177938136,
            "range": "± 6978754",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1323,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 27974,
            "range": "± 1258",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 452494,
            "range": "± 22100",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 3369820,
            "range": "± 161394",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1674,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 79692,
            "range": "± 4136",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1764722,
            "range": "± 111330",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 19347941,
            "range": "± 636832",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2160,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 4290,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 8473,
            "range": "± 442",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 16739,
            "range": "± 560",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 34668,
            "range": "± 2107",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 114112,
            "range": "± 3798",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 227682,
            "range": "± 12703",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 457631,
            "range": "± 20955",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 909765,
            "range": "± 21073",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1826998,
            "range": "± 53571",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 3193278,
            "range": "± 175863",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 6637644,
            "range": "± 559144",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 13186445,
            "range": "± 1292791",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 25514772,
            "range": "± 1695857",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 52014910,
            "range": "± 3614021",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 36766510,
            "range": "± 1586383",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 70760214,
            "range": "± 2196077",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 141214896,
            "range": "± 3322020",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 285421346,
            "range": "± 8586177",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 564671069,
            "range": "± 15167096",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 472115,
            "range": "± 73295",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 2352359,
            "range": "± 316854",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 24489383,
            "range": "± 1952797",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 92335683,
            "range": "± 7499183",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1410,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 79575,
            "range": "± 2071",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1997761,
            "range": "± 70091",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 20853965,
            "range": "± 587649",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9730a00ee81fbe5cb5244456f4545f0dfc3405f7",
          "message": "docs: Migrate all docs in rustdoc instead (#1281)\n\n* Save work\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Migrate rfcs\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* migration done\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Fix CI\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* no doc test for some docs\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* FIx format\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n---------\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-02-05T16:59:40+08:00",
          "tree_id": "f144181bffd038f0f849f1ffec338927c7ae1dbf",
          "url": "https://github.com/datafuselabs/opendal/commit/9730a00ee81fbe5cb5244456f4545f0dfc3405f7"
        },
        "date": 1675588697733,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 85302,
            "range": "± 18513",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 769805,
            "range": "± 19686",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11414694,
            "range": "± 178644",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 48564340,
            "range": "± 784108",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 88589,
            "range": "± 1465",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1118097,
            "range": "± 28055",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17084697,
            "range": "± 763806",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 72900402,
            "range": "± 1279157",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 87917,
            "range": "± 1610",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 88172,
            "range": "± 13616",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 119578,
            "range": "± 9544",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 236029,
            "range": "± 13088",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 455283,
            "range": "± 15755",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 129741,
            "range": "± 2901",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 149016,
            "range": "± 9906",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 269735,
            "range": "± 3853",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 498877,
            "range": "± 11147",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 983522,
            "range": "± 33897",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1235478,
            "range": "± 19293",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 2002282,
            "range": "± 22675",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 3351327,
            "range": "± 72381",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 21915226,
            "range": "± 1079428",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 44743176,
            "range": "± 2167020",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 6061401,
            "range": "± 195799",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 17776459,
            "range": "± 452472",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 35243612,
            "range": "± 1310314",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 69330339,
            "range": "± 1993807",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 138084336,
            "range": "± 3693476",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1146,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13731,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 453774,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1852085,
            "range": "± 168133",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1336,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 47990,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1547738,
            "range": "± 2630",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 14033224,
            "range": "± 207091",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1824,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3351,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6477,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 12776,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 27185,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 85529,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 170886,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 342500,
            "range": "± 286",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 685072,
            "range": "± 691",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1375694,
            "range": "± 3016",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2417255,
            "range": "± 147278",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4985017,
            "range": "± 128213",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 9635250,
            "range": "± 253461",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 19073348,
            "range": "± 285046",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 39260271,
            "range": "± 946077",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 28554479,
            "range": "± 361262",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 57801072,
            "range": "± 775315",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 114148355,
            "range": "± 1359832",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 229288007,
            "range": "± 3899899",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 469978219,
            "range": "± 11347441",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 232511,
            "range": "± 98134",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1464351,
            "range": "± 124212",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19372893,
            "range": "± 2220536",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 77331112,
            "range": "± 7551995",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1091,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 47055,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 2036322,
            "range": "± 64745",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 15781535,
            "range": "± 433456",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8cf6f6317bb52ba565c548a4024133069a8a6f15",
          "message": "docs: Fix index page not redirected (#1282)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-02-05T17:37:45+08:00",
          "tree_id": "77059d9f27042e5a93e195263a0b2ec3933c3c98",
          "url": "https://github.com/datafuselabs/opendal/commit/8cf6f6317bb52ba565c548a4024133069a8a6f15"
        },
        "date": 1675590983021,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 86216,
            "range": "± 7979",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 505325,
            "range": "± 171026",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11254683,
            "range": "± 601070",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 46963951,
            "range": "± 834222",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 85846,
            "range": "± 1222",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1086839,
            "range": "± 43574",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 16858759,
            "range": "± 283404",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 71118019,
            "range": "± 1252613",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 85794,
            "range": "± 12987",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 81493,
            "range": "± 5357",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 146806,
            "range": "± 16785",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 226340,
            "range": "± 10637",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 475093,
            "range": "± 22564",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 128749,
            "range": "± 1383",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 136581,
            "range": "± 9808",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 271921,
            "range": "± 11718",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 492929,
            "range": "± 55964",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1065305,
            "range": "± 110202",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1142509,
            "range": "± 20566",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 1913455,
            "range": "± 41099",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 3197844,
            "range": "± 149244",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 19667477,
            "range": "± 934230",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 42506302,
            "range": "± 1920523",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 5459578,
            "range": "± 112183",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 16874756,
            "range": "± 435333",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 33869133,
            "range": "± 1241093",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 66943444,
            "range": "± 2054195",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 130000145,
            "range": "± 3963751",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1111,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13491,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 437866,
            "range": "± 309",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1771271,
            "range": "± 23540",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1236,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 45795,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1462329,
            "range": "± 8975",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 12883897,
            "range": "± 136137",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1807,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3523,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6948,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 12940,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 25442,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 85641,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 171297,
            "range": "± 1232",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 342499,
            "range": "± 377",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 684605,
            "range": "± 386",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1371193,
            "range": "± 1626",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2176381,
            "range": "± 7659",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4358968,
            "range": "± 14462",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 8717715,
            "range": "± 35372",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 17427480,
            "range": "± 142505",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 34923814,
            "range": "± 104664",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 28304480,
            "range": "± 319966",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 56484309,
            "range": "± 579270",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 112473876,
            "range": "± 981243",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 226095984,
            "range": "± 1695939",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 459132811,
            "range": "± 4970226",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 228198,
            "range": "± 73878",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1345089,
            "range": "± 39206",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19704954,
            "range": "± 2286003",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 75955369,
            "range": "± 11817212",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1133,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 52301,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1686835,
            "range": "± 2141",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 15887858,
            "range": "± 166318",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48f49bcf85a31afd77e20f0eb8b94d4581a722a6",
          "message": "Bump to version 0.26.1 (#1283)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-02-05T18:08:37+08:00",
          "tree_id": "19008d9a36ec93043f9b7fdcf7e21942e3067927",
          "url": "https://github.com/datafuselabs/opendal/commit/48f49bcf85a31afd77e20f0eb8b94d4581a722a6"
        },
        "date": 1675592884205,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 86861,
            "range": "± 15060",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 743377,
            "range": "± 162848",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11127504,
            "range": "± 230240",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 47273338,
            "range": "± 1391713",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 87888,
            "range": "± 1092",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1097116,
            "range": "± 89849",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 16994683,
            "range": "± 512962",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 72083984,
            "range": "± 1190074",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 87813,
            "range": "± 1398",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 89589,
            "range": "± 4890",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 129769,
            "range": "± 7136",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 259640,
            "range": "± 8773",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 558844,
            "range": "± 16561",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 144561,
            "range": "± 2521",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 207243,
            "range": "± 1739",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 299760,
            "range": "± 4245",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 526462,
            "range": "± 15882",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1075026,
            "range": "± 77253",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1429767,
            "range": "± 14107",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 2437539,
            "range": "± 47619",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 4916219,
            "range": "± 303394",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 26337051,
            "range": "± 1224618",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 54663336,
            "range": "± 2322366",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 8623155,
            "range": "± 249045",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 22433473,
            "range": "± 684354",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 45040257,
            "range": "± 1355269",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 91944516,
            "range": "± 2878634",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 191676377,
            "range": "± 3888051",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1184,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 12805,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 496539,
            "range": "± 1139",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4082213,
            "range": "± 89455",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1460,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 57521,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1574540,
            "range": "± 25585",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 20137377,
            "range": "± 118391",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1814,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3553,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 7041,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 13816,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 29684,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 102918,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 205231,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 410067,
            "range": "± 1481",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 821059,
            "range": "± 844",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1639530,
            "range": "± 1404",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2576654,
            "range": "± 79522",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 5371954,
            "range": "± 329093",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 10354272,
            "range": "± 327082",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 21127306,
            "range": "± 812952",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 42087337,
            "range": "± 1349276",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 38185963,
            "range": "± 253029",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 76507967,
            "range": "± 531664",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 152721218,
            "range": "± 825331",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 305845313,
            "range": "± 1317676",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 611387897,
            "range": "± 3199498",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 230013,
            "range": "± 58417",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1654880,
            "range": "± 137751",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19263352,
            "range": "± 1508630",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 80878121,
            "range": "± 2965757",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1262,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 41973,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1727161,
            "range": "± 48398",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 22511654,
            "range": "± 306678",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hezhizhen.yi@gmail.com",
            "name": "Zhizhen He",
            "username": "hezhizhen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "586b65abb18ac150bb5c22a707a599072a02b59e",
          "message": "docs: fix typo (#1285)",
          "timestamp": "2023-02-05T23:25:54+08:00",
          "tree_id": "733a400ea52910b84ef8054298c27e8e12b1b6e4",
          "url": "https://github.com/datafuselabs/opendal/commit/586b65abb18ac150bb5c22a707a599072a02b59e"
        },
        "date": 1675612019218,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 87166,
            "range": "± 11586",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 753259,
            "range": "± 156961",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11319560,
            "range": "± 787665",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 48083918,
            "range": "± 834276",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 87817,
            "range": "± 1439",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1107744,
            "range": "± 44245",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17098042,
            "range": "± 334959",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 72669438,
            "range": "± 1658748",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 87651,
            "range": "± 1616",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 86019,
            "range": "± 12170",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 120945,
            "range": "± 8098",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 216091,
            "range": "± 17034",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 427111,
            "range": "± 27855",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 131538,
            "range": "± 5340",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 137348,
            "range": "± 14029",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 318632,
            "range": "± 9855",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 576223,
            "range": "± 55164",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1234823,
            "range": "± 78490",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1227329,
            "range": "± 25460",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 2010230,
            "range": "± 47227",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 3234455,
            "range": "± 120097",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 21162945,
            "range": "± 944832",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 44877530,
            "range": "± 2520894",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 5667673,
            "range": "± 103567",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 17632707,
            "range": "± 443101",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 34455127,
            "range": "± 1223494",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 68940592,
            "range": "± 1892866",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 132110856,
            "range": "± 3611975",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1154,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13078,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 454406,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1838263,
            "range": "± 14609",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1310,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 46016,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1515075,
            "range": "± 3113",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 13928076,
            "range": "± 152576",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1796,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3222,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6421,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 12717,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 26172,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 86784,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 173314,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 346359,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 692749,
            "range": "± 794",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1386657,
            "range": "± 727",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2210666,
            "range": "± 18243",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4422704,
            "range": "± 18366",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 8885512,
            "range": "± 114920",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 17720352,
            "range": "± 197623",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 35755150,
            "range": "± 410459",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 29434366,
            "range": "± 374468",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 57114530,
            "range": "± 971747",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 111186658,
            "range": "± 870445",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 225144430,
            "range": "± 5772184",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 447824324,
            "range": "± 4139144",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 229179,
            "range": "± 105395",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1308690,
            "range": "± 22599",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19802539,
            "range": "± 2448412",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 75297431,
            "range": "± 10014760",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1126,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 44360,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1983995,
            "range": "± 7292",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 16148581,
            "range": "± 678307",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "02e257c9c95a23dc6eb4d09644697edc7a019cbf",
          "message": "feat: Add ChaosLayer to inject errors into underlying services (#1287)\n\n* feat: Add ChaosLayer\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Add docs\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n* Format code\n\nSigned-off-by: Xuanwo <github@xuanwo.io>\n\n---------\n\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-02-06T13:38:01+08:00",
          "tree_id": "12eeb08efb3b6b69690f0510e4f9f72adefbd00a",
          "url": "https://github.com/datafuselabs/opendal/commit/02e257c9c95a23dc6eb4d09644697edc7a019cbf"
        },
        "date": 1675663128277,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 92949,
            "range": "± 15757",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 771649,
            "range": "± 250236",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11665843,
            "range": "± 1416671",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 49412636,
            "range": "± 2347194",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 94459,
            "range": "± 8447",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1166310,
            "range": "± 51326",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17762656,
            "range": "± 1594712",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 75051017,
            "range": "± 13646322",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 97327,
            "range": "± 6750",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 107227,
            "range": "± 9190",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 167671,
            "range": "± 17102",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 295688,
            "range": "± 12729",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 575085,
            "range": "± 40236",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 175263,
            "range": "± 18663",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 265958,
            "range": "± 19228",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 401706,
            "range": "± 22732",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 664784,
            "range": "± 31956",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1395248,
            "range": "± 129038",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1732053,
            "range": "± 115099",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 2940240,
            "range": "± 219862",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 6949691,
            "range": "± 484311",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 29470930,
            "range": "± 1854762",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 61780035,
            "range": "± 3930199",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 9647485,
            "range": "± 400766",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 23384789,
            "range": "± 1260261",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 47852616,
            "range": "± 2363269",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 96409822,
            "range": "± 4260586",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 198048930,
            "range": "± 9367498",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1523,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 31438,
            "range": "± 2079",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 444362,
            "range": "± 14850",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 3357355,
            "range": "± 139202",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 2253,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 84320,
            "range": "± 5279",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1832687,
            "range": "± 96675",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 19847642,
            "range": "± 837768",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2379,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 4519,
            "range": "± 341",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 8783,
            "range": "± 529",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 18353,
            "range": "± 580",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 38702,
            "range": "± 1390",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 112147,
            "range": "± 5398",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 235096,
            "range": "± 8377",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 468593,
            "range": "± 29344",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 904007,
            "range": "± 33854",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1853002,
            "range": "± 99858",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 3615213,
            "range": "± 242381",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 7167969,
            "range": "± 634056",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 14554221,
            "range": "± 1353146",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 29297476,
            "range": "± 1888081",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 57628275,
            "range": "± 4194152",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 38544419,
            "range": "± 1278066",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 76194027,
            "range": "± 2152058",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 154683533,
            "range": "± 4986226",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 302723596,
            "range": "± 9287231",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 612208505,
            "range": "± 10857570",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 370713,
            "range": "± 37791",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 2155414,
            "range": "± 203810",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 23264320,
            "range": "± 1346492",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 95738585,
            "range": "± 15262880",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1437,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 79714,
            "range": "± 3549",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 2131570,
            "range": "± 154167",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 23443405,
            "range": "± 766816",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bb2ffc7a8dcbbc70c7fe3dbac12b5833f3fe7498",
          "message": "docs: Polish docs for better reading (#1288)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-02-06T15:22:31+08:00",
          "tree_id": "ae85b94c6570faf8e51dfbc39a9becabda684ce9",
          "url": "https://github.com/datafuselabs/opendal/commit/bb2ffc7a8dcbbc70c7fe3dbac12b5833f3fe7498"
        },
        "date": 1675670149303,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 87129,
            "range": "± 4437",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 719879,
            "range": "± 164440",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11335313,
            "range": "± 294068",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 48546379,
            "range": "± 771796",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 88148,
            "range": "± 1348",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1106039,
            "range": "± 36018",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17191355,
            "range": "± 272391",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 73640403,
            "range": "± 1406996",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 88509,
            "range": "± 1821",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 84584,
            "range": "± 10608",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 141493,
            "range": "± 11715",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 223276,
            "range": "± 8116",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 435708,
            "range": "± 35446",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 126836,
            "range": "± 1911",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 130635,
            "range": "± 10999",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 277005,
            "range": "± 19064",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 566134,
            "range": "± 50831",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1078684,
            "range": "± 103161",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1164835,
            "range": "± 6389",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 1997729,
            "range": "± 19310",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 3219090,
            "range": "± 92654",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 21013357,
            "range": "± 1194871",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 43872591,
            "range": "± 2219639",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 5732081,
            "range": "± 122968",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 17501006,
            "range": "± 563631",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 34197943,
            "range": "± 1290964",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 68955091,
            "range": "± 4641527",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 134949846,
            "range": "± 3777539",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1095,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13152,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 444070,
            "range": "± 394",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1930225,
            "range": "± 55980",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1208,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 47379,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1534970,
            "range": "± 33837",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 13363792,
            "range": "± 149833",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1627,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3175,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6474,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 12476,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 25055,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 87115,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 174076,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 348026,
            "range": "± 436",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 674235,
            "range": "± 671",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1347857,
            "range": "± 5708",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2452095,
            "range": "± 48298",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4933928,
            "range": "± 116587",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 10186651,
            "range": "± 227497",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 20314235,
            "range": "± 543192",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 40537644,
            "range": "± 1592359",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 27653867,
            "range": "± 340892",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 54950541,
            "range": "± 589777",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 110814626,
            "range": "± 1450670",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 224502600,
            "range": "± 2372985",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 449312565,
            "range": "± 5831533",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 235433,
            "range": "± 48685",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1393960,
            "range": "± 28501",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19421548,
            "range": "± 2419051",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 75605603,
            "range": "± 9928223",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1093,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 42680,
            "range": "± 400",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 2008848,
            "range": "± 38825",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 15856934,
            "range": "± 401747",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ce39a1bb5e9946e81f19dd7ba40a978b15d70dc9",
          "message": "refactor: Split CompleteReaderLayer from TypeEraserLayer (#1290)\n\n* refactor: Split CompleteReaderLayer from TypeEraserLayer\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Rename file\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n---------\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-02-06T19:25:41+08:00",
          "tree_id": "c9eb2fb8cecc446d1bb73ebba7c6155d52411cb2",
          "url": "https://github.com/datafuselabs/opendal/commit/ce39a1bb5e9946e81f19dd7ba40a978b15d70dc9"
        },
        "date": 1675683855645,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 58110,
            "range": "± 17263",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 764674,
            "range": "± 11079",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11412188,
            "range": "± 686880",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 48954657,
            "range": "± 752181",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 88992,
            "range": "± 1732",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1101334,
            "range": "± 46680",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 16883434,
            "range": "± 236029",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 72745312,
            "range": "± 2466133",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 87597,
            "range": "± 1450",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 90981,
            "range": "± 11568",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 111118,
            "range": "± 9771",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 260688,
            "range": "± 17869",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 442484,
            "range": "± 7166",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 131644,
            "range": "± 2939",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 141398,
            "range": "± 14085",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 280810,
            "range": "± 4957",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 503448,
            "range": "± 24065",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1128821,
            "range": "± 86736",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1118015,
            "range": "± 19012",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 1868281,
            "range": "± 23887",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 3073276,
            "range": "± 85599",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 20629735,
            "range": "± 833821",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 42885038,
            "range": "± 2009732",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 5842021,
            "range": "± 223573",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 17791545,
            "range": "± 438016",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 34795903,
            "range": "± 1161241",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 68797969,
            "range": "± 6340093",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 135004901,
            "range": "± 4058253",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1236,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13316,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 474266,
            "range": "± 505",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1988604,
            "range": "± 49575",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1543,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 47032,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1585159,
            "range": "± 12649",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 13787124,
            "range": "± 142318",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1790,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3703,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 7297,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 13461,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 26112,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 84825,
            "range": "± 668",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 169812,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 338962,
            "range": "± 410",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 677270,
            "range": "± 656",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1353796,
            "range": "± 977",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2204871,
            "range": "± 27999",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4419114,
            "range": "± 44230",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 8773592,
            "range": "± 84872",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 17452356,
            "range": "± 223101",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 35037421,
            "range": "± 351794",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 27467017,
            "range": "± 328638",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 57970256,
            "range": "± 909968",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 110684093,
            "range": "± 1345328",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 220510430,
            "range": "± 2742259",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 442544794,
            "range": "± 3435962",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 233220,
            "range": "± 60055",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1389747,
            "range": "± 53417",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19383217,
            "range": "± 2216912",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 76746837,
            "range": "± 8540083",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1313,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 47477,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1755980,
            "range": "± 2184",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 15260008,
            "range": "± 307342",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e93302acda765d8493f5752e722432b4d6cd0db2",
          "message": "feat: Implement retry reader (#1291)\n\n* Save work\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Fix retry\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* feat: Implement retry reader\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Fix build\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n---------\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-02-06T21:55:49+08:00",
          "tree_id": "dcea2be33444ab202557855f73ded83f7bfcd8c7",
          "url": "https://github.com/datafuselabs/opendal/commit/e93302acda765d8493f5752e722432b4d6cd0db2"
        },
        "date": 1675693338451,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 63937,
            "range": "± 20845",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 757145,
            "range": "± 82515",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11304730,
            "range": "± 654576",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 47677822,
            "range": "± 724783",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 87402,
            "range": "± 1363",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1107441,
            "range": "± 33542",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17381897,
            "range": "± 341845",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 73061263,
            "range": "± 2105902",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 89409,
            "range": "± 1963",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 84847,
            "range": "± 6348",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 141985,
            "range": "± 7687",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 287719,
            "range": "± 9351",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 552073,
            "range": "± 21953",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 146926,
            "range": "± 3118",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 216443,
            "range": "± 4278",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 317829,
            "range": "± 6423",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 543221,
            "range": "± 26184",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1107815,
            "range": "± 50861",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1356408,
            "range": "± 24892",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 2647710,
            "range": "± 187719",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 6347895,
            "range": "± 304962",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 27910450,
            "range": "± 1281429",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 55620811,
            "range": "± 2991705",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 9287113,
            "range": "± 287998",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 22862700,
            "range": "± 504324",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 46582549,
            "range": "± 1368068",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 95011914,
            "range": "± 2699863",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 194543161,
            "range": "± 4730079",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1242,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 12679,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 499985,
            "range": "± 2478",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4120784,
            "range": "± 58053",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1523,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 59806,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1765284,
            "range": "± 52358",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 20914142,
            "range": "± 130403",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2121,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3974,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 7476,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 14696,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 29690,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 106882,
            "range": "± 795",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 213142,
            "range": "± 833",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 425901,
            "range": "± 1419",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 851672,
            "range": "± 2515",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1704535,
            "range": "± 5268",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 3066563,
            "range": "± 200596",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 5848278,
            "range": "± 337364",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 12610080,
            "range": "± 526666",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 24869477,
            "range": "± 1535177",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 48026906,
            "range": "± 1388316",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 39907689,
            "range": "± 304413",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 79847125,
            "range": "± 685983",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 161747933,
            "range": "± 1298183",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 323431307,
            "range": "± 1807420",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 645973660,
            "range": "± 4129034",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 307206,
            "range": "± 37850",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1771902,
            "range": "± 122585",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19953616,
            "range": "± 415226",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 82060578,
            "range": "± 5087577",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1305,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 41618,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1675818,
            "range": "± 46956",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 23581097,
            "range": "± 221717",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zalmstra.bas@gmail.com",
            "name": "Bas Zalmstra",
            "username": "baszalmstra"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "86a5e3485f3a908a642d60c13b8c6f43c3f0a571",
          "message": "feat: use std::path::Path for fs backend (#1100)\n\n* feat: use std::path::Path internally for fs backend\r\n\r\n* fix: root cannot be empty\r\n\r\n* fix: clippy errors\r\n\r\n* fix: oli cp test\r\n\r\n* test: add runner temp as temp and added windows for fs service",
          "timestamp": "2023-02-07T10:19:30+08:00",
          "tree_id": "2c4acb50d7b2da8fdc8f948dca1b29a7171c7269",
          "url": "https://github.com/datafuselabs/opendal/commit/86a5e3485f3a908a642d60c13b8c6f43c3f0a571"
        },
        "date": 1675737552259,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 81815,
            "range": "± 1684",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 355908,
            "range": "± 78217",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11146898,
            "range": "± 616076",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 47090898,
            "range": "± 746822",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 85513,
            "range": "± 1202",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1080434,
            "range": "± 55048",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 16968718,
            "range": "± 233000",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 70537925,
            "range": "± 884662",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 85493,
            "range": "± 1729",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 86052,
            "range": "± 2961",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 135537,
            "range": "± 7238",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 289036,
            "range": "± 48475",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 592091,
            "range": "± 22470",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 143744,
            "range": "± 3886",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 217160,
            "range": "± 3042",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 324068,
            "range": "± 4636",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 545113,
            "range": "± 26362",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1092758,
            "range": "± 45680",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1372837,
            "range": "± 33878",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 2359832,
            "range": "± 71846",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 5985334,
            "range": "± 402323",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 23226886,
            "range": "± 1542872",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 47104110,
            "range": "± 2089716",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 9585737,
            "range": "± 128758",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 22802430,
            "range": "± 453849",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 46916914,
            "range": "± 1449909",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 97039717,
            "range": "± 2758310",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 197993801,
            "range": "± 4786076",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1298,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13222,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 501312,
            "range": "± 4670",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4188240,
            "range": "± 73434",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1586,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 57933,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1636802,
            "range": "± 27404",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 21770304,
            "range": "± 178051",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2003,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3926,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 7464,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 14882,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 29465,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 105154,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 210160,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 421146,
            "range": "± 839",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 840900,
            "range": "± 822",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1678458,
            "range": "± 2444",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 3011823,
            "range": "± 144049",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 6015445,
            "range": "± 319802",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 11637439,
            "range": "± 622281",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 23151583,
            "range": "± 986135",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 47782144,
            "range": "± 2909953",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 39078780,
            "range": "± 238463",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 78170458,
            "range": "± 493262",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 156009317,
            "range": "± 794119",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 310123969,
            "range": "± 1555167",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 627643080,
            "range": "± 3087083",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 242347,
            "range": "± 140321",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1653327,
            "range": "± 119627",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19587514,
            "range": "± 482393",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 81668851,
            "range": "± 1260994",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1286,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 41675,
            "range": "± 416",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1885749,
            "range": "± 71661",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 23906590,
            "range": "± 181734",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "85b3894f3a61af862f0db624571e8e6b17047658",
          "message": "refactor(services/fs): Remove not needed generic (#1292)\n\n* refactor(services/fs): Remove not needed generic\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Return error if root dir for fs not specified\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n---------\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-02-07T10:40:13+08:00",
          "tree_id": "ac9246205b80d905d0232d3a102e1630e688211a",
          "url": "https://github.com/datafuselabs/opendal/commit/85b3894f3a61af862f0db624571e8e6b17047658"
        },
        "date": 1675738923748,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 67849,
            "range": "± 16645",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 760960,
            "range": "± 17900",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11645604,
            "range": "± 858760",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 49082066,
            "range": "± 1643206",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 88132,
            "range": "± 3811",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1150152,
            "range": "± 68226",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17187509,
            "range": "± 680118",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 72025494,
            "range": "± 1420546",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 87162,
            "range": "± 1747",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 85857,
            "range": "± 8373",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 110349,
            "range": "± 7720",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 220981,
            "range": "± 11393",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 442578,
            "range": "± 29502",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 134006,
            "range": "± 13205",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 141467,
            "range": "± 10063",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 296820,
            "range": "± 16097",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 569112,
            "range": "± 92830",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1142567,
            "range": "± 84886",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1217509,
            "range": "± 56502",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 1972820,
            "range": "± 26145",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 3701168,
            "range": "± 542419",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 23230824,
            "range": "± 1230287",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 47672826,
            "range": "± 3807942",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 5990642,
            "range": "± 258737",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 18547889,
            "range": "± 1641251",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 35050787,
            "range": "± 3718788",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 69050125,
            "range": "± 2460338",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 138328802,
            "range": "± 11381266",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1265,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13290,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 430375,
            "range": "± 1658",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1798309,
            "range": "± 483375",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1439,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 46804,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1476111,
            "range": "± 56100",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 13953755,
            "range": "± 1896114",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1868,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3631,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 7191,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 15052,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 28294,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 84828,
            "range": "± 867",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 170317,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 342503,
            "range": "± 5331",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 684698,
            "range": "± 13576",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1364381,
            "range": "± 15759",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2360548,
            "range": "± 308337",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4390391,
            "range": "± 46202",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 9183153,
            "range": "± 3118995",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 18352890,
            "range": "± 2360346",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 36325044,
            "range": "± 3199118",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 30738517,
            "range": "± 2362599",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 61258824,
            "range": "± 3952522",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 122465707,
            "range": "± 12246495",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 246754658,
            "range": "± 9431175",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 491905607,
            "range": "± 22959961",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 236255,
            "range": "± 149767",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1505413,
            "range": "± 80770",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19422857,
            "range": "± 2033500",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 77459582,
            "range": "± 8048463",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1148,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 44075,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1595671,
            "range": "± 3451",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 19726791,
            "range": "± 2855257",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2a52a3109073cc4d1d26dc3903be434010f71b2",
          "message": "fix: FsBuilder can't be used with empty root anymore (#1293)\n\n* fix: FsBuilder can't be used with empty root anymore\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Fix fut been called after returning error\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n---------\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-02-07T11:48:22+08:00",
          "tree_id": "f7bc91ed794355c5dc9f8a4a8bae877f13a968fc",
          "url": "https://github.com/datafuselabs/opendal/commit/d2a52a3109073cc4d1d26dc3903be434010f71b2"
        },
        "date": 1675743009194,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 102921,
            "range": "± 28611",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 931785,
            "range": "± 280163",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 16014716,
            "range": "± 3973641",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 65577917,
            "range": "± 14711239",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 143349,
            "range": "± 24627",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1360551,
            "range": "± 145995",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 21357853,
            "range": "± 1838599",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 89074106,
            "range": "± 7031741",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 111809,
            "range": "± 23176",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 123234,
            "range": "± 16274",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 191940,
            "range": "± 42736",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 312506,
            "range": "± 19247",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 614218,
            "range": "± 51615",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 198014,
            "range": "± 29955",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 291659,
            "range": "± 23708",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 432162,
            "range": "± 38163",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 731642,
            "range": "± 66056",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1514054,
            "range": "± 153303",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1924880,
            "range": "± 207439",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 3791749,
            "range": "± 360136",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 8096800,
            "range": "± 484985",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 30055729,
            "range": "± 1657474",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 59619158,
            "range": "± 4218977",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 9579233,
            "range": "± 461259",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 24953910,
            "range": "± 1288408",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 48010710,
            "range": "± 2673128",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 98932376,
            "range": "± 4814788",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 200307890,
            "range": "± 6049319",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1829,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 30721,
            "range": "± 1371",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 482999,
            "range": "± 24293",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4057997,
            "range": "± 200084",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 2163,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 87605,
            "range": "± 3969",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 2557523,
            "range": "± 255906",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 20023987,
            "range": "± 1138589",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 3011,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 5417,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 10344,
            "range": "± 311",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 22817,
            "range": "± 1070",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 40988,
            "range": "± 1585",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 123551,
            "range": "± 5236",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 249224,
            "range": "± 8795",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 501273,
            "range": "± 33924",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 1003043,
            "range": "± 111863",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 2052033,
            "range": "± 133305",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 4837835,
            "range": "± 266000",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 10038793,
            "range": "± 750283",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 21504304,
            "range": "± 1497052",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 40115410,
            "range": "± 3532132",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 76890807,
            "range": "± 5466893",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 39464857,
            "range": "± 1423635",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 79168804,
            "range": "± 2910747",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 156584205,
            "range": "± 5392307",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 316059425,
            "range": "± 8577938",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 641853385,
            "range": "± 15748087",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 556004,
            "range": "± 136955",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 2655343,
            "range": "± 613475",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 28305902,
            "range": "± 2154238",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 111968409,
            "range": "± 13243246",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1684,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 86424,
            "range": "± 3729",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 3104708,
            "range": "± 183521",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 22625875,
            "range": "± 1323588",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "360b1503cb025f13adcccd74cf821022f3cbef7a",
          "message": "fix: Fix retry happened in seek's read ahead logic (#1294)\n\nfix: Fix retry happend in seek's read ahead logic\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-02-07T13:31:07+08:00",
          "tree_id": "fc2d5278037d64fb5d852c2429767a2ddac67d05",
          "url": "https://github.com/datafuselabs/opendal/commit/360b1503cb025f13adcccd74cf821022f3cbef7a"
        },
        "date": 1675749555473,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 115557,
            "range": "± 16954",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 885108,
            "range": "± 198284",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 14210205,
            "range": "± 3574451",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 58712029,
            "range": "± 6646668",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 113406,
            "range": "± 22977",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1402095,
            "range": "± 142751",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 21220055,
            "range": "± 2883856",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 93390891,
            "range": "± 11556298",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 113934,
            "range": "± 17527",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 125380,
            "range": "± 15558",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 177118,
            "range": "± 17482",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 300469,
            "range": "± 21142",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 608390,
            "range": "± 40158",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 205549,
            "range": "± 56138",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 298289,
            "range": "± 37590",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 438837,
            "range": "± 41043",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 745834,
            "range": "± 60625",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1504216,
            "range": "± 101459",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1656542,
            "range": "± 201839",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 3293691,
            "range": "± 471952",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 8220692,
            "range": "± 560075",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 30399055,
            "range": "± 1600684",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 61163162,
            "range": "± 4201994",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 10233914,
            "range": "± 585435",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 24930032,
            "range": "± 1306034",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 49430570,
            "range": "± 2438595",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 101761216,
            "range": "± 4182223",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 202873298,
            "range": "± 7085525",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1791,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 30235,
            "range": "± 1272",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 497573,
            "range": "± 33161",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 3829803,
            "range": "± 279564",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 2486,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 88160,
            "range": "± 2981",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1779231,
            "range": "± 121954",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 20115918,
            "range": "± 594893",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2711,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 5080,
            "range": "± 336",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 10176,
            "range": "± 388",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 20106,
            "range": "± 1415",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 39845,
            "range": "± 2321",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 123998,
            "range": "± 5710",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 247768,
            "range": "± 24415",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 494843,
            "range": "± 24732",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 997763,
            "range": "± 46462",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1979773,
            "range": "± 67809",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 4159564,
            "range": "± 196550",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 8597649,
            "range": "± 395836",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 17169523,
            "range": "± 744682",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 34225703,
            "range": "± 1617737",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 68224156,
            "range": "± 3849332",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 39455376,
            "range": "± 1109086",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 79410002,
            "range": "± 2720603",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 158411945,
            "range": "± 3699014",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 319505074,
            "range": "± 5624725",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 642903514,
            "range": "± 19937652",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 620319,
            "range": "± 150122",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 2732960,
            "range": "± 418828",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 27973686,
            "range": "± 5106783",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 109773091,
            "range": "± 9081684",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1644,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 84479,
            "range": "± 4277",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 2074724,
            "range": "± 124912",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 23973102,
            "range": "± 789634",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cailue@bupt.edu.cn",
            "name": "ClSlaid",
            "username": "ClSlaid"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fb1189e622ad7d99c81b802ea49bf1d421c4baea",
          "message": "feat: Implement services webhdfs (#1263)\n\n* services: implement webhdfs's builder\r\n\r\nSigned-off-by: 蔡略 <cailue@bupt.edu.cn>\r\n\r\n* feat: implement webhdfs service\r\n\r\nSigned-off-by: 蔡略 <cailue@bupt.edu.cn>\r\n\r\n* refactor: fix unit tests\r\n\r\nSigned-off-by: 蔡略 <cailue@bupt.edu.cn>\r\n\r\n* refactor: add metadata for webhdfs\r\n\r\n1. some documentation works\r\n2. fix listing\r\n3. try trouble shoot listing and writing, unsuccessful\r\n\r\nSigned-off-by: 蔡略 <cailue@bupt.edu.cn>\r\n\r\n* refactor: fix webhdfs read/write/delete\r\n\r\nSigned-off-by: 蔡略 <cailue@bupt.edu.cn>\r\n\r\n* refactor: implement blocking api to make build time checkings\r\n\r\nSigned-off-by: 蔡略 <cailue@bupt.edu.cn>\r\n\r\n* refactor: make clippy happy\r\n\r\nSigned-off-by: 蔡略 <cailue@bupt.edu.cn>\r\n\r\n* ci: complete webhdfs tests\r\n\r\n1. add webhdfs test in ci, running simutaniously with hdfs test\r\n2. add CSRF feature for webhdfs\r\n3. finish documentation for webhdfs\r\n\r\nSigned-off-by: 蔡略 <cailue@bupt.edu.cn>\r\n\r\n* fix: correct default webhdfs port\r\n\r\n1. default webhdfs port is 9870, controled by dfs.namenode.http-address\r\n\r\nSigned-off-by: 蔡略 <cailue@bupt.edu.cn>\r\n\r\n* ci: update webhdfs setup\r\n\r\n1. set endpoint, hope this works\r\n\r\nSigned-off-by: 蔡略 <cailue@bupt.edu.cn>\r\n\r\n* refactor: webhdfs sync up with 0.27.0\r\n\r\nSigned-off-by: 蔡略 <cailue@bupt.edu.cn>\r\n\r\n* refactor: check root in stat\r\n\r\n1. don't run check root when building Backend, run it only when\r\n   Backend::stat instead\r\n2. move messages structs to `message.rs`\r\n3. apply some advices in review\r\n\r\nSigned-off-by: 蔡略 <cailue@bupt.edu.cn>\r\n\r\n* refactor: make clippy happy\r\n\r\nSigned-off-by: 蔡略 <cailue@bupt.edu.cn>\r\n\r\n* fix: fix dead lock in checking root\r\n\r\nSigned-off-by: 蔡略 <cailue@bupt.edu.cn>\r\n\r\n* fix: doc test in webhdfs\r\n\r\nSigned-off-by: 蔡略 <cailue@bupt.edu.cn>\r\n\r\n* refactor: make cargo msrv clippy happy\r\n\r\nSigned-off-by: 蔡略 <cailue@bupt.edu.cn>\r\n\r\n* ci: fix webhdfs integated test\r\n\r\nSigned-off-by: 蔡略 <cailue@bupt.edu.cn>\r\n\r\n* ci: recorrect test command line\r\n\r\nSigned-off-by: 蔡略 <cailue@bupt.edu.cn>\r\n\r\n* Fix CI\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* User runner as webhdfs user\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* ci: change webhdfs test root\r\n\r\nSigned-off-by: 蔡略 <cailue@bupt.edu.cn>\r\n\r\n* typo: fix incorrect documentation\r\n\r\n1. fix incorrect documentation in webhdfs\r\n2. remove unnecessary language environments in webhdfs CI\r\n\r\nSigned-off-by: 蔡略 <cailue@bupt.edu.cn>\r\n\r\n* refactor: remove username and doas\r\n\r\n1. it does not work at all, implement kerberos later\r\n\r\nSigned-off-by: 蔡略 <cailue@bupt.edu.cn>\r\n\r\n* fix: typo fix\r\n\r\nSigned-off-by: 蔡略 <cailue@bupt.edu.cn>\r\n\r\n---------\r\n\r\nSigned-off-by: 蔡略 <cailue@bupt.edu.cn>\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\nCo-authored-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-02-07T14:12:03+08:00",
          "tree_id": "56a412da6c602ab584d8e165d47a298a2abd05b3",
          "url": "https://github.com/datafuselabs/opendal/commit/fb1189e622ad7d99c81b802ea49bf1d421c4baea"
        },
        "date": 1675751471716,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 86740,
            "range": "± 2071",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 408266,
            "range": "± 104184",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11271547,
            "range": "± 589975",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 47342032,
            "range": "± 1162731",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 87402,
            "range": "± 1009",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1113770,
            "range": "± 52710",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17428046,
            "range": "± 358461",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 72845801,
            "range": "± 1311704",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 87472,
            "range": "± 2498",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 86562,
            "range": "± 5904",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 132267,
            "range": "± 13514",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 228982,
            "range": "± 5380",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 442835,
            "range": "± 16677",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 132610,
            "range": "± 3674",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 141644,
            "range": "± 13028",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 295057,
            "range": "± 12691",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 549366,
            "range": "± 51687",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1176243,
            "range": "± 61770",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1194978,
            "range": "± 10614",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 2003137,
            "range": "± 52690",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 3318546,
            "range": "± 206625",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 21211176,
            "range": "± 909932",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 44255543,
            "range": "± 1935158",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 6145893,
            "range": "± 142756",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 18041033,
            "range": "± 413964",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 34939548,
            "range": "± 1299402",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 68636144,
            "range": "± 2495980",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 139995522,
            "range": "± 5010351",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1221,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13629,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 434618,
            "range": "± 13034",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1909415,
            "range": "± 47342",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1583,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 46083,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1420257,
            "range": "± 24153",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 13877041,
            "range": "± 150523",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1818,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3549,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6994,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 13892,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 27908,
            "range": "± 545",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 85107,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 170146,
            "range": "± 793",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 340018,
            "range": "± 379",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 679506,
            "range": "± 517",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1397007,
            "range": "± 1796",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2227062,
            "range": "± 35935",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4479731,
            "range": "± 70166",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 8964790,
            "range": "± 169193",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 18165504,
            "range": "± 689721",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 39970179,
            "range": "± 1209722",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 29052670,
            "range": "± 273098",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 58332034,
            "range": "± 606801",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 116511579,
            "range": "± 1118922",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 233647216,
            "range": "± 2208605",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 472811516,
            "range": "± 5585253",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 224714,
            "range": "± 86460",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1385422,
            "range": "± 30985",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19486366,
            "range": "± 2608157",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 75948635,
            "range": "± 10284057",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1183,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 43608,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1648707,
            "range": "± 9617",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 16784006,
            "range": "± 257055",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5d5c6518e70441ab55cd73107272220fcdf97625",
          "message": "Bump to version 0.26.2 (#1296)\n\n* Bump to version 0.26.2\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Fix docs\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n---------\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-02-07T14:50:04+08:00",
          "tree_id": "a0a3938b609b42f8acf9ddadfd9a1785b9b0d4ae",
          "url": "https://github.com/datafuselabs/opendal/commit/5d5c6518e70441ab55cd73107272220fcdf97625"
        },
        "date": 1675753856646,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 102629,
            "range": "± 5942",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 411563,
            "range": "± 173345",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 12835171,
            "range": "± 1232268",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 58954706,
            "range": "± 8881904",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 105041,
            "range": "± 11168",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1247463,
            "range": "± 62375",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 20414051,
            "range": "± 1782173",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 82660000,
            "range": "± 5103599",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 99568,
            "range": "± 2679",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 106029,
            "range": "± 5796",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 179680,
            "range": "± 11074",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 319750,
            "range": "± 14256",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 658487,
            "range": "± 21512",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 171324,
            "range": "± 9710",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 252218,
            "range": "± 24372",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 359137,
            "range": "± 18773",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 611553,
            "range": "± 40924",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1231344,
            "range": "± 84902",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1489924,
            "range": "± 72925",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 2886813,
            "range": "± 257913",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 7026060,
            "range": "± 609592",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 30309971,
            "range": "± 1958601",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 62327405,
            "range": "± 4192069",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 10141378,
            "range": "± 704271",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 26250482,
            "range": "± 1164335",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 52024370,
            "range": "± 2284498",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 107579140,
            "range": "± 4634947",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 217097027,
            "range": "± 6571735",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1607,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 16073,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 559906,
            "range": "± 2290",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4441592,
            "range": "± 88206",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 2001,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 71605,
            "range": "± 3942",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1877299,
            "range": "± 33626",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 23247045,
            "range": "± 81952",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2606,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 4847,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 9580,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 17925,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 35239,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 118276,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 236299,
            "range": "± 782",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 472338,
            "range": "± 874",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 944428,
            "range": "± 22928",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1886925,
            "range": "± 3335",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 3275496,
            "range": "± 178506",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 6389606,
            "range": "± 306094",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 12304701,
            "range": "± 469268",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 25513856,
            "range": "± 1037394",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 50810526,
            "range": "± 1503245",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 42805052,
            "range": "± 226194",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 84660358,
            "range": "± 426312",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 173024488,
            "range": "± 1304763",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 348196694,
            "range": "± 1705464",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 677359762,
            "range": "± 7084340",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 317199,
            "range": "± 50059",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 2107709,
            "range": "± 161074",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 25136024,
            "range": "± 1425095",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 100041901,
            "range": "± 5460609",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1583,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 54905,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 2059624,
            "range": "± 56890",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 24945203,
            "range": "± 224986",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "psiace@ritelabs.net",
            "name": "Chojan Shang",
            "username": "PsiACE"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "faa6bf8a249e2b2824542fb547b2d058e186b5ad",
          "message": "ci: Fix dev container Dockerfile (#1298)\n\nchore: minor fix\r\n\r\nSigned-off-by: Chojan Shang <psiace@ritelabs.net>",
          "timestamp": "2023-02-08T01:33:05+08:00",
          "tree_id": "11a561ff6dab41024e7a304975ad076011f0abdc",
          "url": "https://github.com/datafuselabs/opendal/commit/faa6bf8a249e2b2824542fb547b2d058e186b5ad"
        },
        "date": 1675792619262,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 86683,
            "range": "± 1420",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 510715,
            "range": "± 82025",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11190875,
            "range": "± 452513",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 47464781,
            "range": "± 1202719",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 87131,
            "range": "± 1602",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1099076,
            "range": "± 46599",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 16880622,
            "range": "± 281392",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 72120987,
            "range": "± 1477938",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 86822,
            "range": "± 1791",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 82569,
            "range": "± 8914",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 130727,
            "range": "± 14155",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 234517,
            "range": "± 21569",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 456553,
            "range": "± 26181",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 129402,
            "range": "± 1537",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 163977,
            "range": "± 16280",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 270500,
            "range": "± 6618",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 482608,
            "range": "± 9626",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 981507,
            "range": "± 20240",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1059085,
            "range": "± 8248",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 1832760,
            "range": "± 23712",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 2959577,
            "range": "± 95910",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 19865329,
            "range": "± 821564",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 43539105,
            "range": "± 1784713",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 5646661,
            "range": "± 103160",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 17238052,
            "range": "± 457674",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 34078960,
            "range": "± 1307294",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 68087337,
            "range": "± 2080840",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 134429933,
            "range": "± 3762268",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1253,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13328,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 442098,
            "range": "± 819",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1792405,
            "range": "± 18709",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1347,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 49476,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1498452,
            "range": "± 4112",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 13762756,
            "range": "± 170320",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1819,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3578,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6921,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 14014,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 28912,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 86675,
            "range": "± 580",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 172442,
            "range": "± 1293",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 343841,
            "range": "± 351",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 687358,
            "range": "± 4213",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1377300,
            "range": "± 1602",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2204199,
            "range": "± 92801",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4400434,
            "range": "± 73722",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 9520126,
            "range": "± 245654",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 17657440,
            "range": "± 644229",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 36109964,
            "range": "± 747451",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 28302909,
            "range": "± 968886",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 56140514,
            "range": "± 754926",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 112900157,
            "range": "± 1559266",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 224338046,
            "range": "± 2032774",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 452188862,
            "range": "± 6357689",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 233950,
            "range": "± 68029",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1383232,
            "range": "± 36737",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19543286,
            "range": "± 2430771",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 76410256,
            "range": "± 9550052",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1187,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 47297,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1585647,
            "range": "± 3774",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 15637316,
            "range": "± 451379",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ae1610732d7924fd32f6d798855bef585333aba0",
          "message": "fix: Rocksdb's scheme not output correctly (#1300)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-02-08T09:38:31+08:00",
          "tree_id": "25b513ec85fbe4b9d852ebd92a156972021000ed",
          "url": "https://github.com/datafuselabs/opendal/commit/ae1610732d7924fd32f6d798855bef585333aba0"
        },
        "date": 1675821444752,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 88878,
            "range": "± 4977",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 407862,
            "range": "± 174811",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11325029,
            "range": "± 162201",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 48250127,
            "range": "± 981789",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 88618,
            "range": "± 1666",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1105895,
            "range": "± 52958",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 16999715,
            "range": "± 321424",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 73210167,
            "range": "± 1182167",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 88961,
            "range": "± 1643",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 88589,
            "range": "± 9983",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 113373,
            "range": "± 9710",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 216575,
            "range": "± 10437",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 440793,
            "range": "± 33974",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 129295,
            "range": "± 5822",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 146172,
            "range": "± 10950",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 291610,
            "range": "± 7696",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 495443,
            "range": "± 17882",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1002233,
            "range": "± 130303",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1226683,
            "range": "± 9324",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 2005159,
            "range": "± 24620",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 3277453,
            "range": "± 105438",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 21756547,
            "range": "± 1162918",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 44793834,
            "range": "± 2443697",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 5622944,
            "range": "± 113862",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 17451650,
            "range": "± 408891",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 34734566,
            "range": "± 1232332",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 69372336,
            "range": "± 3515874",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 135074136,
            "range": "± 4303355",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1325,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13965,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 440750,
            "range": "± 421",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1814125,
            "range": "± 31256",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1451,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 45813,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1469649,
            "range": "± 3327",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 13828861,
            "range": "± 231963",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1851,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3634,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 7253,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 14335,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 28982,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 87106,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 173852,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 347364,
            "range": "± 1679",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 694299,
            "range": "± 750",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1388114,
            "range": "± 881",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2192071,
            "range": "± 14797",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4386608,
            "range": "± 30277",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 9813389,
            "range": "± 64880",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 20189745,
            "range": "± 68329",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 40465758,
            "range": "± 204151",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 29449270,
            "range": "± 344289",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 57504641,
            "range": "± 713691",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 114356383,
            "range": "± 1491251",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 228972067,
            "range": "± 2770493",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 470318470,
            "range": "± 4850281",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 294585,
            "range": "± 41783",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1506581,
            "range": "± 56690",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19203814,
            "range": "± 2484745",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 76437675,
            "range": "± 8685945",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1148,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 46125,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1619775,
            "range": "± 1985",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 15850072,
            "range": "± 280393",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2aadb8232742bfafe47ff9bea49013c5550c676",
          "message": "refactor: Hide backon from our public API (#1302)\n\n* refactor: Hide backon from our public API\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n* Remove not needed use\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>\r\n\r\n---------\r\n\r\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-02-08T16:36:46+08:00",
          "tree_id": "2b7a2aa21367e26518d17dbea774eaf2d7e6394e",
          "url": "https://github.com/datafuselabs/opendal/commit/f2aadb8232742bfafe47ff9bea49013c5550c676"
        },
        "date": 1675846662301,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 88736,
            "range": "± 3452",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 459872,
            "range": "± 129256",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11558722,
            "range": "± 1442137",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 48810903,
            "range": "± 697741",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 89484,
            "range": "± 2963",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1123239,
            "range": "± 31900",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17571466,
            "range": "± 328050",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 74019537,
            "range": "± 1201400",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 89038,
            "range": "± 1847",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 90553,
            "range": "± 9421",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 108730,
            "range": "± 5747",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 217956,
            "range": "± 13194",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 437397,
            "range": "± 56811",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 136701,
            "range": "± 2030",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 152517,
            "range": "± 13849",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 299929,
            "range": "± 24735",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 516173,
            "range": "± 52648",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1162781,
            "range": "± 84980",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1256603,
            "range": "± 8361",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 2100804,
            "range": "± 44121",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 3617860,
            "range": "± 218543",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 22892925,
            "range": "± 1141498",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 45164581,
            "range": "± 2074835",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 5929910,
            "range": "± 142685",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 18101629,
            "range": "± 397154",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 35009309,
            "range": "± 1199452",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 70371118,
            "range": "± 2253291",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 139467895,
            "range": "± 5058107",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1183,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 15639,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 477502,
            "range": "± 524",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 2068848,
            "range": "± 78541",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1667,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 51201,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1615010,
            "range": "± 12393",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 14899587,
            "range": "± 185858",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1815,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3539,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6816,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 13373,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 26974,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 88158,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 175980,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 350935,
            "range": "± 1659",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 701937,
            "range": "± 480",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1402971,
            "range": "± 1340",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2253377,
            "range": "± 23728",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4504257,
            "range": "± 41803",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 9251894,
            "range": "± 67204",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 18522004,
            "range": "± 144778",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 37071916,
            "range": "± 226145",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 29675391,
            "range": "± 310577",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 59251308,
            "range": "± 658014",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 118479852,
            "range": "± 1190414",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 237476076,
            "range": "± 2869298",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 475857740,
            "range": "± 2560284",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 227077,
            "range": "± 69856",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1361210,
            "range": "± 52011",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19499572,
            "range": "± 2110952",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 78096950,
            "range": "± 6266581",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1191,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 44657,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1631068,
            "range": "± 5036",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 16252766,
            "range": "± 248072",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@xuanwo.io",
            "name": "Xuanwo",
            "username": "Xuanwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "10c4ded0729aed12810928b499ec00df3378527a",
          "message": "refactor: Don't expose ops structs to users directly (#1303)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-02-08T17:30:03+08:00",
          "tree_id": "9eab19315b536de0b29fb0a6e917522d07354a5f",
          "url": "https://github.com/datafuselabs/opendal/commit/10c4ded0729aed12810928b499ec00df3378527a"
        },
        "date": 1675849749271,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 87574,
            "range": "± 1641",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 563111,
            "range": "± 125821",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11336222,
            "range": "± 324556",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 53208814,
            "range": "± 4546719",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 88334,
            "range": "± 2605",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1111910,
            "range": "± 35174",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 19062139,
            "range": "± 2030748",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 74156789,
            "range": "± 1809959",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 89105,
            "range": "± 6092",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 89039,
            "range": "± 8945",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 169667,
            "range": "± 29449",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 253132,
            "range": "± 12697",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 507832,
            "range": "± 43228",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 133664,
            "range": "± 7030",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 144622,
            "range": "± 13303",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 264689,
            "range": "± 12158",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 488203,
            "range": "± 11538",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1002311,
            "range": "± 41440",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1186016,
            "range": "± 14208",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 2092942,
            "range": "± 32883",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 3686608,
            "range": "± 151779",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 18279155,
            "range": "± 816953",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 36405393,
            "range": "± 2052195",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 6254440,
            "range": "± 444006",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 17454570,
            "range": "± 389110",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 33425364,
            "range": "± 2622537",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 66505779,
            "range": "± 3622661",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 130954754,
            "range": "± 4476208",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1152,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13512,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 439861,
            "range": "± 2023",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1867150,
            "range": "± 40627",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1424,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 49238,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1553741,
            "range": "± 13885",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 14190754,
            "range": "± 154589",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1828,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3585,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6972,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 13643,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 27442,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 84965,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 169848,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 339161,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 677844,
            "range": "± 648",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1357711,
            "range": "± 14274",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2633227,
            "range": "± 82484",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 5151119,
            "range": "± 106568",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 10414456,
            "range": "± 251767",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 21174837,
            "range": "± 592494",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 41033013,
            "range": "± 950874",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 27561375,
            "range": "± 416364",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 55504605,
            "range": "± 587617",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 110402368,
            "range": "± 1259139",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 222783345,
            "range": "± 2156290",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 443649105,
            "range": "± 4624752",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 229617,
            "range": "± 66043",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1422590,
            "range": "± 37425",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19538448,
            "range": "± 2071905",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 76598140,
            "range": "± 8214102",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1236,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 44915,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1931183,
            "range": "± 13172",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 17047984,
            "range": "± 950811",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cailue@bupt.edu.cn",
            "name": "ClSlaid",
            "username": "ClSlaid"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6c0edf6f81ba6ce38c379d9377c275cc6884be59",
          "message": "feat: Add Retryable Pager Support (#1304)\n\n* feat: add retry for object pagers\r\n\r\nSigned-off-by: 蔡略 <cailue@bupt.edu.cn>\r\n\r\n* ci: add mock test for retry pager\r\n\r\nSigned-off-by: 蔡略 <cailue@bupt.edu.cn>\r\n\r\n* refactor: blocking use retriable directly\r\n\r\n1. for async version, some big trouble will be introduced and to quickly\r\n   merge this PR, let's keep it as it is.\r\n\r\nSigned-off-by: 蔡略 <cailue@bupt.edu.cn>\r\n\r\n---------\r\n\r\nSigned-off-by: 蔡略 <cailue@bupt.edu.cn>",
          "timestamp": "2023-02-09T10:51:46+08:00",
          "tree_id": "abdec788c04458aa1de86f52543f36ff4c975bbc",
          "url": "https://github.com/datafuselabs/opendal/commit/6c0edf6f81ba6ce38c379d9377c275cc6884be59"
        },
        "date": 1675912235974,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 53468,
            "range": "± 4580",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 770931,
            "range": "± 10305",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11536199,
            "range": "± 566225",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 49006039,
            "range": "± 943249",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 89478,
            "range": "± 2690",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1125982,
            "range": "± 49735",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17444180,
            "range": "± 392672",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 74084509,
            "range": "± 1337754",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 89652,
            "range": "± 10289",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 91804,
            "range": "± 9048",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 131667,
            "range": "± 12321",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 221004,
            "range": "± 4222",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 451510,
            "range": "± 38424",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 133586,
            "range": "± 3443",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 138274,
            "range": "± 8994",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 302093,
            "range": "± 5163",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 514616,
            "range": "± 10709",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1021776,
            "range": "± 50229",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1224409,
            "range": "± 40804",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 2007278,
            "range": "± 28511",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 3396324,
            "range": "± 56947",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 21820795,
            "range": "± 1128250",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 45861222,
            "range": "± 1720940",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 5801918,
            "range": "± 69541",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 17197769,
            "range": "± 274552",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 34835366,
            "range": "± 1159969",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 69951728,
            "range": "± 2794022",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 136140857,
            "range": "± 4639199",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1221,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13301,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 444135,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 1789379,
            "range": "± 9174",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1495,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 47782,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1518373,
            "range": "± 3451",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 13003864,
            "range": "± 70058",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 1733,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 3402,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 6859,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 13550,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 28732,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 85527,
            "range": "± 750",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 170906,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 340956,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 681735,
            "range": "± 450",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1363467,
            "range": "± 1773",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 2198588,
            "range": "± 9305",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 4394583,
            "range": "± 22349",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 8856616,
            "range": "± 132278",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 19747617,
            "range": "± 145448",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 39361534,
            "range": "± 149840",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 28727025,
            "range": "± 188564",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 59005301,
            "range": "± 440256",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 117762794,
            "range": "± 1208160",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 229732951,
            "range": "± 1094424",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 461759446,
            "range": "± 4431953",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 246361,
            "range": "± 49155",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1454772,
            "range": "± 49886",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19322154,
            "range": "± 2213509",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 78001769,
            "range": "± 8543489",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1222,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 43800,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 1602389,
            "range": "± 2437",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 15576098,
            "range": "± 260169",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}