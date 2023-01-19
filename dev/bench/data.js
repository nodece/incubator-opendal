window.BENCHMARK_DATA = {
  "lastUpdate": 1674112503410,
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
      }
    ]
  }
}