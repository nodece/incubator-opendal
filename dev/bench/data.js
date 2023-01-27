window.BENCHMARK_DATA = {
  "lastUpdate": 1674806528497,
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
      }
    ]
  }
}