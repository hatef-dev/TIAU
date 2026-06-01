TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2027,
       "width": 4053,
       "url": "media/panorama_E7F09EF1_EDE4_E562_41CA_40CCE37F3C2C_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_E7F09EF1_EDE4_E562_41CA_40CCE37F3C2C.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_E7F09EF1_EDE4_E562_41CA_40CCE37F3C2C_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "id": "overlay_E12EAF4D_EDEC_E4A3_41E3_25E511E23EEE",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_11E1823F_01EE_FE51_4164_0F331FE68528, this.camera_7D493B56_6C91_5216_41CC_4C5FF5EA2C95); this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 4.14,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 23,
           "url": "media/panorama_E7F09EF1_EDE4_E562_41CA_40CCE37F3C2C_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -8.02,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -5.99
       }
      ],
      "items": [
       {
        "hfov": 4.14,
        "image": {
         "levels": [
          {
           "height": 43,
           "width": 46,
           "url": "media/panorama_E7F09EF1_EDE4_E562_41CA_40CCE37F3C2C_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -8.02,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -5.99
       }
      ]
     },
     {
      "useHandCursor": true,
      "id": "overlay_E33B333D_EDE3_9CE3_41E7_022B485E7D5A",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_E7EA6B26_EDE4_ECE1_41E6_9EBA8DBCB404, this.camera_7D552B46_6C91_5276_41CE_9330ED823FF5); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "hfov": 4.49,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 25,
           "url": "media/panorama_E7F09EF1_EDE4_E562_41CA_40CCE37F3C2C_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 66.12,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -6.31
       }
      ],
      "items": [
       {
        "hfov": 4.49,
        "image": {
         "levels": [
          {
           "height": 43,
           "width": 50,
           "url": "media/panorama_E7F09EF1_EDE4_E562_41CA_40CCE37F3C2C_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 66.12,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -6.31
       }
      ]
     },
     {
      "hfov": 26.4,
      "image": {
       "levels": [
        {
         "height": 1134,
         "width": 1134,
         "url": "media/panorama_E7F09EF1_EDE4_E562_41CA_40CCE37F3C2C_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "id": "panorama_E7F09EF1_EDE4_E562_41CA_40CCE37F3C2C_tcap0",
      "inertia": true,
      "rotate": true,
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     }
    ]
   }
  ],
  "adjacentPanoramas": [
   {
    "backwardYaw": -18.8,
    "panorama": {
     "frames": [
      {
       "sphere": {
        "levels": [
         {
          "height": 2027,
          "width": 4053,
          "url": "media/panorama_E7EA6B26_EDE4_ECE1_41E6_9EBA8DBCB404_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_E7EA6B26_EDE4_ECE1_41E6_9EBA8DBCB404.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_E7EA6B26_EDE4_ECE1_41E6_9EBA8DBCB404_t.jpg",
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "useHandCursor": true,
         "id": "overlay_E38171CA_EDFC_9FA1_41CA_19A39242BB1D",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_E7F09EF1_EDE4_E562_41CA_40CCE37F3C2C, this.camera_7D24EB17_6C91_5215_41CA_F59FCCCDDD12); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "enabledInCardboard": true,
         "maps": [
          {
           "hfov": 4.41,
           "image": {
            "levels": [
             {
              "height": 24,
              "width": 24,
              "url": "media/panorama_E7EA6B26_EDE4_ECE1_41E6_9EBA8DBCB404_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -18.8,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -6.83
          }
         ],
         "items": [
          {
           "hfov": 4.41,
           "image": {
            "levels": [
             {
              "height": 49,
              "width": 49,
              "url": "media/panorama_E7EA6B26_EDE4_ECE1_41E6_9EBA8DBCB404_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -18.8,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -6.83
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_E3C02E82_EDFD_A5A1_41D2_A0B0EA5A5078",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_E1E44D86_EE24_A7AE_41E1_6112566432E6, this.camera_7D5DEB37_6C91_5216_41A0_C3CCEF05D75A); this.mainPlayList.set('selectedIndex', 3)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "enabledInCardboard": true,
         "maps": [
          {
           "hfov": 4.42,
           "image": {
            "levels": [
             {
              "height": 24,
              "width": 24,
              "url": "media/panorama_E7EA6B26_EDE4_ECE1_41E6_9EBA8DBCB404_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 86.57,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -5.91
          }
         ],
         "items": [
          {
           "hfov": 4.42,
           "image": {
            "levels": [
             {
              "height": 49,
              "width": 49,
              "url": "media/panorama_E7EA6B26_EDE4_ECE1_41E6_9EBA8DBCB404_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 86.57,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -5.91
          }
         ]
        },
        {
         "hfov": 26.4,
         "image": {
          "levels": [
           {
            "height": 1134,
            "width": 1134,
            "url": "media/panorama_E7F09EF1_EDE4_E562_41CA_40CCE37F3C2C_tcap0.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "id": "panorama_E7EA6B26_EDE4_ECE1_41E6_9EBA8DBCB404_tcap0",
         "inertia": true,
         "rotate": true,
         "angle": 0,
         "class": "TripodCapPanoramaOverlay"
        }
       ]
      }
     ],
     "adjacentPanoramas": [
      {
       "backwardYaw": 66.12,
       "panorama": "this.panorama_E7F09EF1_EDE4_E562_41CA_40CCE37F3C2C",
       "yaw": -18.8,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "backwardYaw": -177.37,
       "panorama": {
        "frames": [
         {
          "sphere": {
           "levels": [
            {
             "height": 2027,
             "width": 4053,
             "url": "media/panorama_E1E44D86_EE24_A7AE_41E1_6112566432E6_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 2001,
             "width": 4002,
             "url": "media/panorama_E1E44D86_EE24_A7AE_41E1_6112566432E6.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_E1E44D86_EE24_A7AE_41E1_6112566432E6_t.jpg",
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "useHandCursor": true,
            "id": "overlay_FEFE6F80_EE24_E3A2_41D5_DD69A08617EA",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_11E1823F_01EE_FE51_4164_0F331FE68528, this.camera_7D3CAAD9_6C91_521A_41D4_7BCDD157A299); this.mainPlayList.set('selectedIndex', 2)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "enabledInCardboard": true,
            "maps": [
             {
              "hfov": 5.1,
              "image": {
               "levels": [
                {
                 "height": 29,
                 "width": 29,
                 "url": "media/panorama_E1E44D86_EE24_A7AE_41E1_6112566432E6_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -88.07,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -8.16
             }
            ],
            "items": [
             {
              "hfov": 5.1,
              "image": {
               "levels": [
                {
                 "height": 58,
                 "width": 58,
                 "url": "media/panorama_E1E44D86_EE24_A7AE_41E1_6112566432E6_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -88.07,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -8.16
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_FCD7C049_EE23_9CA3_41E7_3D5706F0A160",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_E7EA6B26_EDE4_ECE1_41E6_9EBA8DBCB404, this.camera_7D088ABA_6C91_521E_41D3_F53C6BFE0D13); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "enabledInCardboard": true,
            "maps": [
             {
              "hfov": 4.86,
              "image": {
               "levels": [
                {
                 "height": 27,
                 "width": 27,
                 "url": "media/panorama_E1E44D86_EE24_A7AE_41E1_6112566432E6_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -177.37,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -5.64
             }
            ],
            "items": [
             {
              "hfov": 4.86,
              "image": {
               "levels": [
                {
                 "height": 55,
                 "width": 55,
                 "url": "media/panorama_E1E44D86_EE24_A7AE_41E1_6112566432E6_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -177.37,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -5.64
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_FF2614CB_EE3F_65A6_41EA_DC4573629F54",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_E7FC4010_EDE4_9CA1_41DB_899EB04B7235, this.camera_7D074AC9_6C91_527A_41D8_4F2F768E147D); this.mainPlayList.set('selectedIndex', 4)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "enabledInCardboard": true,
            "maps": [
             {
              "hfov": 2.9,
              "image": {
               "levels": [
                {
                 "height": 17,
                 "width": 16,
                 "url": "media/panorama_E1E44D86_EE24_A7AE_41E1_6112566432E6_0_HS_2_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -0.48,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -3.5
             }
            ],
            "items": [
             {
              "hfov": 2.9,
              "image": {
               "levels": [
                {
                 "height": 34,
                 "width": 32,
                 "url": "media/panorama_E1E44D86_EE24_A7AE_41E1_6112566432E6_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -0.48,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -3.5
             }
            ]
           },
           {
            "hfov": 26.4,
            "image": {
             "levels": [
              {
               "height": 1134,
               "width": 1134,
               "url": "media/panorama_E7F09EF1_EDE4_E562_41CA_40CCE37F3C2C_tcap0.png",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "id": "panorama_E1E44D86_EE24_A7AE_41E1_6112566432E6_tcap0",
            "inertia": true,
            "rotate": true,
            "angle": 0,
            "class": "TripodCapPanoramaOverlay"
           }
          ]
         }
        ],
        "adjacentPanoramas": [
         {
          "backwardYaw": 86.57,
          "panorama": "this.panorama_E7EA6B26_EDE4_ECE1_41E6_9EBA8DBCB404",
          "yaw": -177.37,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "backwardYaw": 91.9,
          "panorama": {
           "frames": [
            {
             "sphere": {
              "levels": [
               {
                "height": 2027,
                "width": 4053,
                "url": "media/panorama_E7FC4010_EDE4_9CA1_41DB_899EB04B7235_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 2001,
                "width": 4002,
                "url": "media/panorama_E7FC4010_EDE4_9CA1_41DB_899EB04B7235.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_E7FC4010_EDE4_9CA1_41DB_899EB04B7235_t.jpg",
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "useHandCursor": true,
               "id": "overlay_FF3575AC_EE24_A7E2_41E9_06E3CD30DB43",
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_E7C5DC48_EDE4_A4A2_41D1_10BD12FDBD70, this.camera_7D73EB75_6C91_522A_4195_A8C04ABB32A6); this.mainPlayList.set('selectedIndex', 5)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "enabledInCardboard": true,
               "maps": [
                {
                 "hfov": 4.88,
                 "image": {
                  "levels": [
                   {
                    "height": 27,
                    "width": 27,
                    "url": "media/panorama_E7FC4010_EDE4_9CA1_41DB_899EB04B7235_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 2.04,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -3.02
                }
               ],
               "items": [
                {
                 "hfov": 4.88,
                 "image": {
                  "levels": [
                   {
                    "height": 55,
                    "width": 55,
                    "url": "media/panorama_E7FC4010_EDE4_9CA1_41DB_899EB04B7235_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 2.04,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -3.02
                }
               ]
              },
              {
               "useHandCursor": true,
               "id": "overlay_FFBAC23F_EE25_7CDE_41C5_FFFEA501D3A1",
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_E1E44D86_EE24_A7AE_41E1_6112566432E6, this.camera_7D623B75_6C91_522A_41C9_A048649A723E); this.mainPlayList.set('selectedIndex', 3)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "enabledInCardboard": true,
               "maps": [
                {
                 "hfov": 3.99,
                 "image": {
                  "levels": [
                   {
                    "height": 20,
                    "width": 22,
                    "url": "media/panorama_E7FC4010_EDE4_9CA1_41DB_899EB04B7235_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 91.9,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -2.84
                }
               ],
               "items": [
                {
                 "hfov": 3.99,
                 "image": {
                  "levels": [
                   {
                    "height": 40,
                    "width": 45,
                    "url": "media/panorama_E7FC4010_EDE4_9CA1_41DB_899EB04B7235_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 91.9,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -2.84
                }
               ]
              },
              {
               "useHandCursor": true,
               "id": "overlay_FC24C7FE_EE24_A35E_41DD_33BEC42CC6CA",
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_E7CC33E4_EDE4_E362_41E3_162C32082B42, this.camera_7C500BA4_6C91_522A_41D2_C8ED1A75DE4C); this.mainPlayList.set('selectedIndex', 8)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "enabledInCardboard": true,
               "maps": [
                {
                 "hfov": 4.95,
                 "image": {
                  "levels": [
                   {
                    "height": 21,
                    "width": 27,
                    "url": "media/panorama_E7FC4010_EDE4_9CA1_41DB_899EB04B7235_0_HS_2_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -87.55,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -3.4
                }
               ],
               "items": [
                {
                 "hfov": 4.95,
                 "image": {
                  "levels": [
                   {
                    "height": 43,
                    "width": 55,
                    "url": "media/panorama_E7FC4010_EDE4_9CA1_41DB_899EB04B7235_0_HS_2_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -87.55,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -3.4
                }
               ]
              },
              {
               "useHandCursor": true,
               "id": "overlay_129D0EDE_0227_67D0_415F_3AB1E7EDA705",
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_11E1823F_01EE_FE51_4164_0F331FE68528, this.camera_7D973B85_6C91_52EA_41D1_11795E1736A0); this.mainPlayList.set('selectedIndex', 2)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "enabledInCardboard": true,
               "maps": [
                {
                 "hfov": 3.14,
                 "image": {
                  "levels": [
                   {
                    "height": 15,
                    "width": 17,
                    "url": "media/panorama_E7FC4010_EDE4_9CA1_41DB_899EB04B7235_0_HS_3_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 115.99,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -2.97
                }
               ],
               "items": [
                {
                 "hfov": 3.14,
                 "image": {
                  "levels": [
                   {
                    "height": 31,
                    "width": 35,
                    "url": "media/panorama_E7FC4010_EDE4_9CA1_41DB_899EB04B7235_0_HS_3_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 115.99,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -2.97
                }
               ]
              },
              {
               "hfov": 26.4,
               "image": {
                "levels": [
                 {
                  "height": 1134,
                  "width": 1134,
                  "url": "media/panorama_E7F09EF1_EDE4_E562_41CA_40CCE37F3C2C_tcap0.png",
                  "class": "ImageResourceLevel"
                 }
                ],
                "class": "ImageResource"
               },
               "id": "panorama_E7FC4010_EDE4_9CA1_41DB_899EB04B7235_tcap0",
               "inertia": true,
               "rotate": true,
               "angle": 0,
               "class": "TripodCapPanoramaOverlay"
              }
             ]
            }
           ],
           "adjacentPanoramas": [
            {
             "backwardYaw": 174.88,
             "panorama": {
              "frames": [
               {
                "sphere": {
                 "levels": [
                  {
                   "height": 2027,
                   "width": 4053,
                   "url": "media/panorama_E7C5DC48_EDE4_A4A2_41D1_10BD12FDBD70_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 2001,
                   "width": 4002,
                   "url": "media/panorama_E7C5DC48_EDE4_A4A2_41D1_10BD12FDBD70.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_E7C5DC48_EDE4_A4A2_41D1_10BD12FDBD70_t.jpg",
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "id": "overlay_FFD06EB3_EE27_A5E6_41E6_6F67DC97F6E9",
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  },
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_E7FC4010_EDE4_9CA1_41DB_899EB04B7235, this.camera_7D160A8B_6C91_52FE_41B7_C5659481B147); this.mainPlayList.set('selectedIndex', 4)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "enabledInCardboard": true,
                  "maps": [
                   {
                    "hfov": 4.64,
                    "image": {
                     "levels": [
                      {
                       "height": 20,
                       "width": 26,
                       "url": "media/panorama_E7C5DC48_EDE4_A4A2_41D1_10BD12FDBD70_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 174.88,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -1.29
                   }
                  ],
                  "items": [
                   {
                    "hfov": 4.64,
                    "image": {
                     "levels": [
                      {
                       "height": 40,
                       "width": 52,
                       "url": "media/panorama_E7C5DC48_EDE4_A4A2_41D1_10BD12FDBD70_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 174.88,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -1.29
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_FD8D6DF7_EE24_A76E_41EC_9EF02CDA2566",
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  },
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_E6C7187E_EDE4_AD5E_41EB_11740428F41D, this.camera_7D138AAA_6C91_523E_41D7_8F580D9950DB); this.mainPlayList.set('selectedIndex', 6)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "enabledInCardboard": true,
                  "maps": [
                   {
                    "hfov": 5.33,
                    "image": {
                     "levels": [
                      {
                       "height": 20,
                       "width": 30,
                       "url": "media/panorama_E7C5DC48_EDE4_A4A2_41D1_10BD12FDBD70_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -5.55,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -2.3
                   }
                  ],
                  "items": [
                   {
                    "hfov": 5.33,
                    "image": {
                     "levels": [
                      {
                       "height": 40,
                       "width": 60,
                       "url": "media/panorama_E7C5DC48_EDE4_A4A2_41D1_10BD12FDBD70_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -5.55,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -2.3
                   }
                  ]
                 },
                 {
                  "hfov": 26.4,
                  "image": {
                   "levels": [
                    {
                     "height": 1134,
                     "width": 1134,
                     "url": "media/panorama_E7F09EF1_EDE4_E562_41CA_40CCE37F3C2C_tcap0.png",
                     "class": "ImageResourceLevel"
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "id": "panorama_E7C5DC48_EDE4_A4A2_41D1_10BD12FDBD70_tcap0",
                  "inertia": true,
                  "rotate": true,
                  "angle": 0,
                  "class": "TripodCapPanoramaOverlay"
                 }
                ]
               }
              ],
              "adjacentPanoramas": [
               {
                "backwardYaw": 2.04,
                "panorama": "this.panorama_E7FC4010_EDE4_9CA1_41DB_899EB04B7235",
                "yaw": 174.88,
                "class": "AdjacentPanorama",
                "distance": 1
               },
               {
                "backwardYaw": -179.14,
                "panorama": {
                 "frames": [
                  {
                   "sphere": {
                    "levels": [
                     {
                      "height": 2027,
                      "width": 4053,
                      "url": "media/panorama_E6C7187E_EDE4_AD5E_41EB_11740428F41D_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 2001,
                      "width": 4002,
                      "url": "media/panorama_E6C7187E_EDE4_AD5E_41EB_11740428F41D.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_E6C7187E_EDE4_AD5E_41EB_11740428F41D_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "id": "overlay_FC2BF1E7_EE25_7F6F_41C5_9559D55BC7DB",
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "data": {
                      "label": "Image"
                     },
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_E7C5DC48_EDE4_A4A2_41D1_10BD12FDBD70, this.camera_7D2D4B08_6C91_53FA_41D8_A4657BEEE194); this.mainPlayList.set('selectedIndex', 5)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "enabledInCardboard": true,
                     "maps": [
                      {
                       "hfov": 6.22,
                       "image": {
                        "levels": [
                         {
                          "height": 21,
                          "width": 35,
                          "url": "media/panorama_E6C7187E_EDE4_AD5E_41EB_11740428F41D_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": -179.14,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -1.21
                      }
                     ],
                     "items": [
                      {
                       "hfov": 6.22,
                       "image": {
                        "levels": [
                         {
                          "height": 42,
                          "width": 70,
                          "url": "media/panorama_E6C7187E_EDE4_AD5E_41EB_11740428F41D_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": -179.14,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -1.21
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "id": "overlay_FA5E9A11_EE23_ACA2_41DC_49249F818F77",
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "data": {
                      "label": "Image"
                     },
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_E737846D_EDE4_A562_41DD_E9742C5BD322, this.camera_7D34EAF8_6C91_521A_41BB_DE5ECB1121E3); this.mainPlayList.set('selectedIndex', 7)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "enabledInCardboard": true,
                     "maps": [
                      {
                       "hfov": 4.88,
                       "image": {
                        "levels": [
                         {
                          "height": 24,
                          "width": 27,
                          "url": "media/panorama_E6C7187E_EDE4_AD5E_41EB_11740428F41D_0_HS_1_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": 14.3,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -2.26
                      }
                     ],
                     "items": [
                      {
                       "hfov": 4.88,
                       "image": {
                        "levels": [
                         {
                          "height": 49,
                          "width": 55,
                          "url": "media/panorama_E6C7187E_EDE4_AD5E_41EB_11740428F41D_0_HS_1_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": 14.3,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -2.26
                      }
                     ]
                    },
                    {
                     "hfov": 26.4,
                     "image": {
                      "levels": [
                       {
                        "height": 1134,
                        "width": 1134,
                        "url": "media/panorama_E7F09EF1_EDE4_E562_41CA_40CCE37F3C2C_tcap0.png",
                        "class": "ImageResourceLevel"
                       }
                      ],
                      "class": "ImageResource"
                     },
                     "id": "panorama_E6C7187E_EDE4_AD5E_41EB_11740428F41D_tcap0",
                     "inertia": true,
                     "rotate": true,
                     "angle": 0,
                     "class": "TripodCapPanoramaOverlay"
                    }
                   ]
                  }
                 ],
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": 11.26,
                   "panorama": {
                    "frames": [
                     {
                      "sphere": {
                       "levels": [
                        {
                         "height": 2027,
                         "width": 4053,
                         "url": "media/panorama_E737846D_EDE4_A562_41DD_E9742C5BD322_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 2001,
                         "width": 4002,
                         "url": "media/panorama_E737846D_EDE4_A562_41DD_E9742C5BD322.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "thumbnailUrl": "media/panorama_E737846D_EDE4_A562_41DD_E9742C5BD322_t.jpg",
                      "class": "SphericPanoramaFrame",
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "id": "overlay_FCDAA4BE_EE2D_65DE_41C0_DA7547876084",
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "data": {
                         "label": "Image"
                        },
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_E6C7187E_EDE4_AD5E_41EB_11740428F41D, this.camera_7D7D6B66_6C91_5236_41A8_0800A4C8801A); this.mainPlayList.set('selectedIndex', 6)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "enabledInCardboard": true,
                        "maps": [
                         {
                          "hfov": 4.13,
                          "image": {
                           "levels": [
                            {
                             "height": 21,
                             "width": 23,
                             "url": "media/panorama_E737846D_EDE4_A562_41DD_E9742C5BD322_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": 11.26,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -2.83
                         }
                        ],
                        "items": [
                         {
                          "hfov": 4.13,
                          "image": {
                           "levels": [
                            {
                             "height": 42,
                             "width": 46,
                             "url": "media/panorama_E737846D_EDE4_A562_41DD_E9742C5BD322_0_HS_0_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": 11.26,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -2.83
                         }
                        ]
                       },
                       {
                        "hfov": 26.4,
                        "image": {
                         "levels": [
                          {
                           "height": 1134,
                           "width": 1134,
                           "url": "media/panorama_E7F09EF1_EDE4_E562_41CA_40CCE37F3C2C_tcap0.png",
                           "class": "ImageResourceLevel"
                          }
                         ],
                         "class": "ImageResource"
                        },
                        "id": "panorama_E737846D_EDE4_A562_41DD_E9742C5BD322_tcap0",
                        "inertia": true,
                        "rotate": true,
                        "angle": 0,
                        "class": "TripodCapPanoramaOverlay"
                       }
                      ]
                     }
                    ],
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": 14.3,
                      "panorama": "this.panorama_E6C7187E_EDE4_AD5E_41EB_11740428F41D",
                      "yaw": 11.26,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     }
                    ],
                    "thumbnailUrl": "media/panorama_E737846D_EDE4_A562_41DD_E9742C5BD322_t.jpg",
                    "id": "panorama_E737846D_EDE4_A562_41DD_E9742C5BD322",
                    "class": "Panorama",
                    "pitch": 0,
                    "hfov": 360,
                    "hfovMax": 120,
                    "label": "001 copy",
                    "partial": false,
                    "hfovMin": 60,
                    "vfov": 180
                   },
                   "yaw": 14.3,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  },
                  {
                   "backwardYaw": -5.55,
                   "panorama": "this.panorama_E7C5DC48_EDE4_A4A2_41D1_10BD12FDBD70",
                   "yaw": -179.14,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  }
                 ],
                 "thumbnailUrl": "media/panorama_E6C7187E_EDE4_AD5E_41EB_11740428F41D_t.jpg",
                 "id": "panorama_E6C7187E_EDE4_AD5E_41EB_11740428F41D",
                 "class": "Panorama",
                 "pitch": 0,
                 "hfov": 360,
                 "hfovMax": 120,
                 "label": "002 copy",
                 "partial": false,
                 "hfovMin": 60,
                 "vfov": 180
                },
                "yaw": -5.55,
                "class": "AdjacentPanorama",
                "distance": 1
               }
              ],
              "thumbnailUrl": "media/panorama_E7C5DC48_EDE4_A4A2_41D1_10BD12FDBD70_t.jpg",
              "id": "panorama_E7C5DC48_EDE4_A4A2_41D1_10BD12FDBD70",
              "class": "Panorama",
              "pitch": 0,
              "hfov": 360,
              "hfovMax": 120,
              "label": "003 copy",
              "partial": false,
              "hfovMin": 60,
              "vfov": 180
             },
             "yaw": 2.04,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "backwardYaw": -0.48,
             "panorama": "this.panorama_E1E44D86_EE24_A7AE_41E1_6112566432E6",
             "yaw": 91.9,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "backwardYaw": 109.98,
             "panorama": {
              "frames": [
               {
                "sphere": {
                 "levels": [
                  {
                   "height": 2027,
                   "width": 4053,
                   "url": "media/panorama_11E1823F_01EE_FE51_4164_0F331FE68528_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 2001,
                   "width": 4002,
                   "url": "media/panorama_11E1823F_01EE_FE51_4164_0F331FE68528.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_11E1823F_01EE_FE51_4164_0F331FE68528_t.jpg",
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "id": "overlay_0FED1B3D_01E5_AE50_4153_7BCBF727DD42",
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  },
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_E7F09EF1_EDE4_E562_41CA_40CCE37F3C2C, this.camera_7C52ABB4_6C91_522A_41D2_EBAABC0A9DF1); this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "enabledInCardboard": true,
                  "maps": [
                   {
                    "hfov": 3.89,
                    "image": {
                     "levels": [
                      {
                       "height": 27,
                       "width": 21,
                       "url": "media/panorama_11E1823F_01EE_FE51_4164_0F331FE68528_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -93.24,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -2.84
                   }
                  ],
                  "items": [
                   {
                    "hfov": 3.89,
                    "image": {
                     "levels": [
                      {
                       "height": 54,
                       "width": 43,
                       "url": "media/panorama_11E1823F_01EE_FE51_4164_0F331FE68528_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -93.24,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -2.84
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_0FB0866C_01E7_66F7_417E_BE0190F246D0",
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  },
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_E1E44D86_EE24_A7AE_41E1_6112566432E6, this.camera_7C4F9BC3_6C91_526E_416A_1B1D8DC019FA); this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "enabledInCardboard": true,
                  "maps": [
                   {
                    "hfov": 5.61,
                    "image": {
                     "levels": [
                      {
                       "height": 28,
                       "width": 31,
                       "url": "media/panorama_11E1823F_01EE_FE51_4164_0F331FE68528_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 178.15,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -3.55
                   }
                  ],
                  "items": [
                   {
                    "hfov": 5.61,
                    "image": {
                     "levels": [
                      {
                       "height": 57,
                       "width": 63,
                       "url": "media/panorama_11E1823F_01EE_FE51_4164_0F331FE68528_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 178.15,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -3.55
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_12173C5F_0223_EAD0_4153_889F24CBDF0E",
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  },
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_E7FC4010_EDE4_9CA1_41DB_899EB04B7235, this.camera_7C4BEBC3_6C91_526E_4175_936AA21A6E69); this.mainPlayList.set('selectedIndex', 4)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "enabledInCardboard": true,
                  "maps": [
                   {
                    "hfov": 4.32,
                    "image": {
                     "levels": [
                      {
                       "height": 24,
                       "width": 24,
                       "url": "media/panorama_11E1823F_01EE_FE51_4164_0F331FE68528_0_HS_2_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 109.98,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -1.29
                   }
                  ],
                  "items": [
                   {
                    "hfov": 4.32,
                    "image": {
                     "levels": [
                      {
                       "height": 48,
                       "width": 48,
                       "url": "media/panorama_11E1823F_01EE_FE51_4164_0F331FE68528_0_HS_2_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 109.98,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -1.29
                   }
                  ]
                 },
                 {
                  "hfov": 26.4,
                  "image": {
                   "levels": [
                    {
                     "height": 1134,
                     "width": 1134,
                     "url": "media/panorama_E7F09EF1_EDE4_E562_41CA_40CCE37F3C2C_tcap0.png",
                     "class": "ImageResourceLevel"
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "id": "panorama_11E1823F_01EE_FE51_4164_0F331FE68528_tcap0",
                  "inertia": true,
                  "rotate": true,
                  "angle": 0,
                  "class": "TripodCapPanoramaOverlay"
                 }
                ]
               }
              ],
              "adjacentPanoramas": [
               {
                "backwardYaw": -8.02,
                "panorama": "this.panorama_E7F09EF1_EDE4_E562_41CA_40CCE37F3C2C",
                "yaw": -93.24,
                "class": "AdjacentPanorama",
                "distance": 1
               },
               {
                "backwardYaw": -88.07,
                "panorama": "this.panorama_E1E44D86_EE24_A7AE_41E1_6112566432E6",
                "yaw": 178.15,
                "class": "AdjacentPanorama",
                "distance": 1
               },
               {
                "backwardYaw": 115.99,
                "panorama": "this.panorama_E7FC4010_EDE4_9CA1_41DB_899EB04B7235",
                "yaw": 109.98,
                "class": "AdjacentPanorama",
                "distance": 1
               }
              ],
              "thumbnailUrl": "media/panorama_11E1823F_01EE_FE51_4164_0F331FE68528_t.jpg",
              "id": "panorama_11E1823F_01EE_FE51_4164_0F331FE68528",
              "class": "Panorama",
              "pitch": 0,
              "hfov": 360,
              "hfovMax": 120,
              "label": "0010 copy",
              "partial": false,
              "hfovMin": 60,
              "vfov": 180
             },
             "yaw": 115.99,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "backwardYaw": 93.06,
             "panorama": {
              "frames": [
               {
                "sphere": {
                 "levels": [
                  {
                   "height": 2027,
                   "width": 4053,
                   "url": "media/panorama_E7CC33E4_EDE4_E362_41E3_162C32082B42_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 2001,
                   "width": 4002,
                   "url": "media/panorama_E7CC33E4_EDE4_E362_41E3_162C32082B42.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_E7CC33E4_EDE4_E362_41E3_162C32082B42_t.jpg",
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "id": "overlay_FC72E840_EE2C_ACA2_41C8_508C7BD6A824",
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  },
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_E7FC4010_EDE4_9CA1_41DB_899EB04B7235, this.camera_7C411BD3_6C91_526E_41B1_CEAE43F23010); this.mainPlayList.set('selectedIndex', 4)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "enabledInCardboard": true,
                  "maps": [
                   {
                    "hfov": 4.43,
                    "image": {
                     "levels": [
                      {
                       "height": 19,
                       "width": 24,
                       "url": "media/panorama_E7CC33E4_EDE4_E362_41E3_162C32082B42_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 93.06,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -3.09
                   }
                  ],
                  "items": [
                   {
                    "hfov": 4.43,
                    "image": {
                     "levels": [
                      {
                       "height": 39,
                       "width": 49,
                       "url": "media/panorama_E7CC33E4_EDE4_E362_41E3_162C32082B42_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 93.06,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -3.09
                   }
                  ]
                 },
                 {
                  "hfov": 26.4,
                  "image": {
                   "levels": [
                    {
                     "height": 1134,
                     "width": 1134,
                     "url": "media/panorama_E7F09EF1_EDE4_E562_41CA_40CCE37F3C2C_tcap0.png",
                     "class": "ImageResourceLevel"
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "id": "panorama_E7CC33E4_EDE4_E362_41E3_162C32082B42_tcap0",
                  "inertia": true,
                  "rotate": true,
                  "angle": 0,
                  "class": "TripodCapPanoramaOverlay"
                 }
                ]
               }
              ],
              "adjacentPanoramas": [
               {
                "backwardYaw": -87.55,
                "panorama": "this.panorama_E7FC4010_EDE4_9CA1_41DB_899EB04B7235",
                "yaw": 93.06,
                "class": "AdjacentPanorama",
                "distance": 1
               }
              ],
              "thumbnailUrl": "media/panorama_E7CC33E4_EDE4_E362_41E3_162C32082B42_t.jpg",
              "id": "panorama_E7CC33E4_EDE4_E362_41E3_162C32082B42",
              "class": "Panorama",
              "pitch": 0,
              "hfov": 360,
              "hfovMax": 120,
              "label": "005 copy",
              "partial": false,
              "hfovMin": 60,
              "vfov": 180
             },
             "yaw": -87.55,
             "class": "AdjacentPanorama",
             "distance": 1
            }
           ],
           "thumbnailUrl": "media/panorama_E7FC4010_EDE4_9CA1_41DB_899EB04B7235_t.jpg",
           "id": "panorama_E7FC4010_EDE4_9CA1_41DB_899EB04B7235",
           "class": "Panorama",
           "pitch": 0,
           "hfov": 360,
           "hfovMax": 120,
           "label": "004 copy",
           "partial": false,
           "hfovMin": 60,
           "vfov": 180
          },
          "yaw": -0.48,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "backwardYaw": 178.15,
          "panorama": "this.panorama_11E1823F_01EE_FE51_4164_0F331FE68528",
          "yaw": -88.07,
          "class": "AdjacentPanorama",
          "distance": 1
         }
        ],
        "thumbnailUrl": "media/panorama_E1E44D86_EE24_A7AE_41E1_6112566432E6_t.jpg",
        "id": "panorama_E1E44D86_EE24_A7AE_41E1_6112566432E6",
        "class": "Panorama",
        "pitch": 0,
        "hfov": 360,
        "hfovMax": 120,
        "label": "009 copy",
        "partial": false,
        "hfovMin": 60,
        "vfov": 180
       },
       "yaw": 86.57,
       "class": "AdjacentPanorama",
       "distance": 1
      }
     ],
     "thumbnailUrl": "media/panorama_E7EA6B26_EDE4_ECE1_41E6_9EBA8DBCB404_t.jpg",
     "id": "panorama_E7EA6B26_EDE4_ECE1_41E6_9EBA8DBCB404",
     "class": "Panorama",
     "pitch": 0,
     "hfov": 360,
     "hfovMax": 120,
     "label": "007 copy",
     "partial": false,
     "hfovMin": 60,
     "vfov": 180
    },
    "yaw": 66.12,
    "class": "AdjacentPanorama",
    "distance": 1
   },
   {
    "backwardYaw": -93.24,
    "panorama": "this.panorama_11E1823F_01EE_FE51_4164_0F331FE68528",
    "yaw": -8.02,
    "class": "AdjacentPanorama",
    "distance": 1
   }
  ],
  "thumbnailUrl": "media/panorama_E7F09EF1_EDE4_E562_41CA_40CCE37F3C2C_t.jpg",
  "id": "panorama_E7F09EF1_EDE4_E562_41CA_40CCE37F3C2C",
  "class": "Panorama",
  "pitch": 0,
  "hfov": 360,
  "hfovMax": 120,
  "label": "008 copy",
  "partial": false,
  "hfovMin": 60,
  "vfov": 180
 },
 {
  "displayPlaybackBar": true,
  "preloadEnabled": false,
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_E7F09EF1_EDE4_E562_41CA_40CCE37F3C2C_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 24.09,
   "class": "PanoramaCameraPosition",
   "pitch": 10.13
  }
 },
 "this.panorama_E7EA6B26_EDE4_ECE1_41E6_9EBA8DBCB404",
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_E7EA6B26_EDE4_ECE1_41E6_9EBA8DBCB404_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 26.65,
   "class": "PanoramaCameraPosition",
   "pitch": 1.4
  }
 },
 "this.panorama_11E1823F_01EE_FE51_4164_0F331FE68528",
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_11E1823F_01EE_FE51_4164_0F331FE68528_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_E1E44D86_EE24_A7AE_41E1_6112566432E6",
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_E1E44D86_EE24_A7AE_41E1_6112566432E6_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_E7FC4010_EDE4_9CA1_41DB_899EB04B7235",
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_E7FC4010_EDE4_9CA1_41DB_899EB04B7235_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 51.13,
   "class": "PanoramaCameraPosition",
   "pitch": -1.31
  }
 },
 "this.panorama_E7C5DC48_EDE4_A4A2_41D1_10BD12FDBD70",
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_E7C5DC48_EDE4_A4A2_41D1_10BD12FDBD70_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_E6C7187E_EDE4_AD5E_41EB_11740428F41D",
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_E6C7187E_EDE4_AD5E_41EB_11740428F41D_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_E737846D_EDE4_A562_41DD_E9742C5BD322",
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_E737846D_EDE4_A562_41DD_E9742C5BD322_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_E7CC33E4_EDE4_E362_41E3_162C32082B42",
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_E7CC33E4_EDE4_E362_41E3_162C32082B42_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_E7F09EF1_EDE4_E562_41CA_40CCE37F3C2C_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_E7F09EF1_EDE4_E562_41CA_40CCE37F3C2C",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_E7EA6B26_EDE4_ECE1_41E6_9EBA8DBCB404_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_E7EA6B26_EDE4_ECE1_41E6_9EBA8DBCB404",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_11E1823F_01EE_FE51_4164_0F331FE68528_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_11E1823F_01EE_FE51_4164_0F331FE68528",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_E1E44D86_EE24_A7AE_41E1_6112566432E6_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_E1E44D86_EE24_A7AE_41E1_6112566432E6",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_E7FC4010_EDE4_9CA1_41DB_899EB04B7235_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_E7FC4010_EDE4_9CA1_41DB_899EB04B7235",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_E7C5DC48_EDE4_A4A2_41D1_10BD12FDBD70_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_E7C5DC48_EDE4_A4A2_41D1_10BD12FDBD70",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_E6C7187E_EDE4_AD5E_41EB_11740428F41D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_E6C7187E_EDE4_AD5E_41EB_11740428F41D",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_E737846D_EDE4_A562_41DD_E9742C5BD322_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_E737846D_EDE4_A562_41DD_E9742C5BD322",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_E7CC33E4_EDE4_E362_41E3_162C32082B42_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 0)",
    "media": "this.panorama_E7CC33E4_EDE4_E362_41E3_162C32082B42",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 {
  "data": {
   "label": "bikalameiranisonati(2)"
  },
  "id": "audio_7D874D50_6C8F_366B_41D2_ABEF92CFE10E",
  "class": "MediaAudio",
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_7D874D50_6C8F_366B_41D2_ABEF92CFE10E.ogg",
   "mp3Url": "media/audio_7D874D50_6C8F_366B_41D2_ABEF92CFE10E.mp3"
  },
  "autoplay": true,
  "loop": true
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7D160A8B_6C91_52FE_41B7_C5659481B147",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -177.96,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7D138AAA_6C91_523E_41D7_8F580D9950DB",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0.86,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7D088ABA_6C91_521E_41D3_F53C6BFE0D13",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -93.43,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7D074AC9_6C91_527A_41D8_4F2F768E147D",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -88.1,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7D3CAAD9_6C91_521A_41D4_7BCDD157A299",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -1.85,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7D34EAF8_6C91_521A_41BB_DE5ECB1121E3",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -168.74,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7D2D4B08_6C91_53FA_41D8_A4657BEEE194",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 174.45,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7D24EB17_6C91_5215_41CA_F59FCCCDDD12",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -113.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7D5DEB37_6C91_5216_41A0_C3CCEF05D75A",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 2.63,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7D552B46_6C91_5276_41CE_9330ED823FF5",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 161.2,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7D493B56_6C91_5216_41CC_4C5FF5EA2C95",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 86.76,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7D7D6B66_6C91_5236_41A8_0800A4C8801A",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -165.7,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7D73EB75_6C91_522A_4195_A8C04ABB32A6",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -5.12,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7D623B75_6C91_522A_41C9_A048649A723E",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 179.52,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7D973B85_6C91_52EA_41D1_11795E1736A0",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -70.02,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7C500BA4_6C91_522A_41D2_C8ED1A75DE4C",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -86.94,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7C52ABB4_6C91_522A_41D2_EBAABC0A9DF1",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 171.98,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7C4F9BC3_6C91_526E_416A_1B1D8DC019FA",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 91.93,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7C4BEBC3_6C91_526E_4175_936AA21A6E69",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -64.01,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_7C411BD3_6C91_526E_41B1_CEAE43F23010",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 92.45,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 }
], "children": [
 {
  "paddingLeft": 0,
  "toolTipPaddingRight": 6,
  "playbackBarProgressBorderRadius": 0,
  "toolTipPaddingLeft": 6,
  "playbackBarBottom": 5,
  "paddingRight": 0,
  "toolTipTextShadowBlurRadius": 3,
  "progressBarBorderSize": 0,
  "progressHeight": 10,
  "playbackBarProgressOpacity": 1,
  "class": "ViewerArea",
  "toolTipOpacity": 1,
  "toolTipBorderSize": 1,
  "playbackBarRight": 0,
  "progressBarOpacity": 1,
  "toolTipPaddingTop": 4,
  "toolTipFontWeight": "normal",
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "borderRadius": 0,
  "transitionDuration": 500,
  "transitionMode": "blending",
  "toolTipTextShadowOpacity": 0,
  "toolTipShadowSpread": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipShadowOpacity": 1,
  "progressBorderSize": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "shadow": false,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadow": true,
  "toolTipFontColor": "#606060",
  "paddingBottom": 0,
  "toolTipFontSize": 12,
  "toolTipDisplayTime": 600,
  "progressRight": 0,
  "progressBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderSize": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "width": "100%",
  "toolTipShadowHorizontalLength": 0,
  "progressBarBorderRadius": 0,
  "height": "100%",
  "paddingTop": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipFontFamily": "Arial",
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadHeight": 15,
  "playbackBarProgressBorderSize": 0,
  "toolTipShadowColor": "#333333",
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBarBackgroundColorDirection": "vertical",
  "progressBarBorderColor": "#000000",
  "progressBackgroundOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "minHeight": 50,
  "playbackBarLeft": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBorderColor": "#000000",
  "toolTipBorderRadius": 3,
  "toolTipPaddingBottom": 4,
  "id": "MainViewer",
  "playbackBarHeadOpacity": 1,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeight": 10,
  "borderSize": 0,
  "playbackBarHeadWidth": 6,
  "playbackBarBorderRadius": 0,
  "minWidth": 100,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressLeft": 0,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBottom": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipFontStyle": "normal",
  "progressOpacity": 1,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarBackgroundOpacity": 1,
  "playbackBarOpacity": 1
 },
 {
  "paddingLeft": 0,
  "iconBeforeLabel": true,
  "iconHeight": 40,
  "iconWidth": 40,
  "verticalAlign": "middle",
  "rollOverBackgroundOpacity": 0,
  "backgroundColor": [
   "#5794FE",
   "#0065CD"
  ],
  "width": 40,
  "class": "Button",
  "paddingRight": 0,
  "paddingTop": 0,
  "gap": 0,
  "shadowBlurRadius": 6,
  "fontFamily": "Arial",
  "shadowSpread": 1,
  "pressedBackgroundOpacity": 0,
  "fontSize": 12,
  "pressedIconURL": "skin/Button_7C404445_6C71_D66A_41CE_0A52B02D147F_pressed.png",
  "borderRadius": 0,
  "fontStyle": "normal",
  "textDecoration": "none",
  "mode": "toggle",
  "horizontalAlign": "center",
  "height": 40,
  "pressedIconWidth": 40,
  "minHeight": 0,
  "rollOverIconWidth": 40,
  "borderColor": "#000000",
  "fontWeight": "normal",
  "shadow": false,
  "cursor": "hand",
  "click": "if(this.getGlobalAudio(this.audio_7D874D50_6C8F_366B_41D2_ABEF92CFE10E).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_7D874D50_6C8F_366B_41D2_ABEF92CFE10E); } else { this.playGlobalAudio(this.audio_7D874D50_6C8F_366B_41D2_ABEF92CFE10E); }",
  "bottom": "2.31%",
  "id": "Button_7C404445_6C71_D66A_41CE_0A52B02D147F",
  "iconURL": "skin/Button_7C404445_6C71_D66A_41CE_0A52B02D147F.png",
  "layout": "horizontal",
  "minWidth": 0,
  "backgroundOpacity": 0,
  "backgroundColorDirection": "vertical",
  "data": {
   "name": "Button49930"
  },
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingBottom": 0,
  "left": "0.93%",
  "shadowColor": "#000000",
  "fontColor": "#FFFFFF",
  "pressedIconHeight": 40,
  "rollOverIconHeight": 40,
  "borderSize": 0
 }
], 
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playAudioList([this.audio_7D874D50_6C8F_366B_41D2_ABEF92CFE10E])",
 "paddingLeft": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "mouseWheelEnabled": true,
 "paddingRight": 0,
 "width": "100%",
 "vrPolyfillScale": 0.5,
 "class": "Player",
 "paddingTop": 0,
 "gap": 10,
 "mobileMipmappingEnabled": false,
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "scripts": {
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "registerKey": function(key, value){  window[key] = value; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "unregisterKey": function(key){  delete window[key]; },
  "getKey": function(key){  return window[key]; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "existsKey": function(key){  return key in window; },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); }
 },
 "horizontalAlign": "left",
 "height": "100%",
 "minHeight": 20,
 "shadow": false,
 "scrollBarWidth": 10,
 "id": "rootPlayer",
 "minWidth": 20,
 "data": {
  "name": "Player431"
 },
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "creationPolicy": "delayed",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "backgroundPreloadEnabled": true,
 "contentOpaque": false,
 "borderSize": 0,
 "buttonToggleMute": "this.Button_7C404445_6C71_D66A_41CE_0A52B02D147F"
})