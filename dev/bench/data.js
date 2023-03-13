window.BENCHMARK_DATA = {
  "lastUpdate": 1678713729846,
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
          "id": "c4ada149d68d4822bd7b5403009e2efaff6739b8",
          "message": "ci: Fix typo in workflows (#1582)\n\nSigned-off-by: Xuanwo <github@xuanwo.io>",
          "timestamp": "2023-03-13T21:00:17+08:00",
          "tree_id": "783764ab365f9c9de652d38823371267574f0a01",
          "url": "https://github.com/datafuselabs/opendal/commit/c4ada149d68d4822bd7b5403009e2efaff6739b8"
        },
        "date": 1678713727982,
        "tool": "cargo",
        "benches": [
          {
            "name": "service_fs_read_full/4.00 KiB",
            "value": 88730,
            "range": "± 18201",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/256 KiB",
            "value": 764894,
            "range": "± 222035",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/4.00 MiB",
            "value": 11451255,
            "range": "± 336449",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_full/16.0 MiB",
            "value": 47782352,
            "range": "± 1558609",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 KiB",
            "value": 90366,
            "range": "± 5285",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/256 KiB",
            "value": 1123159,
            "range": "± 57931",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/4.00 MiB",
            "value": 17804027,
            "range": "± 764202",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_part/16.0 MiB",
            "value": 78448886,
            "range": "± 12227124",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 KiB",
            "value": 90075,
            "range": "± 2546",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 KiB",
            "value": 94313,
            "range": "± 4712",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 KiB",
            "value": 145419,
            "range": "± 6598",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 KiB",
            "value": 275531,
            "range": "± 6217",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 KiB",
            "value": 617014,
            "range": "± 23342",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x256 KiB",
            "value": 151172,
            "range": "± 11270",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x256 KiB",
            "value": 221310,
            "range": "± 6178",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x256 KiB",
            "value": 315202,
            "range": "± 7000",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x256 KiB",
            "value": 548300,
            "range": "± 12573",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x256 KiB",
            "value": 1126489,
            "range": "± 38680",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x4.00 MiB",
            "value": 1438994,
            "range": "± 123416",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x4.00 MiB",
            "value": 3517441,
            "range": "± 363913",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x4.00 MiB",
            "value": 7797034,
            "range": "± 462521",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x4.00 MiB",
            "value": 29342443,
            "range": "± 1942577",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x4.00 MiB",
            "value": 58914883,
            "range": "± 3644865",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/1x16.0 MiB",
            "value": 9488019,
            "range": "± 506599",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/2x16.0 MiB",
            "value": 24660871,
            "range": "± 922819",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/4x16.0 MiB",
            "value": 49577838,
            "range": "± 1798344",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/8x16.0 MiB",
            "value": 99523239,
            "range": "± 4988696",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_read_parallel/16x16.0 MiB",
            "value": 201546108,
            "range": "± 7871496",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 KiB",
            "value": 1457,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/256 KiB",
            "value": 13411,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/4.00 MiB",
            "value": 504168,
            "range": "± 3606",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_full/16.0 MiB",
            "value": 4483540,
            "range": "± 74724",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 KiB",
            "value": 1863,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/256 KiB",
            "value": 58529,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/4.00 MiB",
            "value": 1962967,
            "range": "± 85882",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_part/16.0 MiB",
            "value": 21994133,
            "range": "± 99414",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 KiB",
            "value": 2188,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 KiB",
            "value": 4284,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 KiB",
            "value": 8517,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 KiB",
            "value": 17102,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 KiB",
            "value": 32126,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x256 KiB",
            "value": 109067,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x256 KiB",
            "value": 218577,
            "range": "± 451",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x256 KiB",
            "value": 437013,
            "range": "± 1272",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x256 KiB",
            "value": 873423,
            "range": "± 4671",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x256 KiB",
            "value": 1984970,
            "range": "± 116235",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x4.00 MiB",
            "value": 3293514,
            "range": "± 93007",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x4.00 MiB",
            "value": 6965151,
            "range": "± 210278",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x4.00 MiB",
            "value": 13406797,
            "range": "± 755598",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x4.00 MiB",
            "value": 26645492,
            "range": "± 1105409",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x4.00 MiB",
            "value": 57937735,
            "range": "± 3355703",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/1x16.0 MiB",
            "value": 40707208,
            "range": "± 262636",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/2x16.0 MiB",
            "value": 79174495,
            "range": "± 388687",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/4x16.0 MiB",
            "value": 157812982,
            "range": "± 1174482",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/8x16.0 MiB",
            "value": 314534912,
            "range": "± 2315968",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_read_parallel/16x16.0 MiB",
            "value": 629980379,
            "range": "± 3222235",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 KiB",
            "value": 528712,
            "range": "± 54061",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/256 KiB",
            "value": 1320366,
            "range": "± 264607",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/4.00 MiB",
            "value": 19316797,
            "range": "± 4123140",
            "unit": "ns/iter"
          },
          {
            "name": "service_fs_write_once/16.0 MiB",
            "value": 94171530,
            "range": "± 25162355",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 KiB",
            "value": 1039,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/256 KiB",
            "value": 19106,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/4.00 MiB",
            "value": 937903,
            "range": "± 14319",
            "unit": "ns/iter"
          },
          {
            "name": "service_memory_write_once/16.0 MiB",
            "value": 6047221,
            "range": "± 67555",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}