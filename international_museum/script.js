TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "thumbnailUrl": "media/panorama_560A935F_5CDB_8AE5_41D7_043D9547A69E_t.jpg",
  "partial": false,
  "class": "Panorama",
  "adjacentPanoramas": [
   {
    "backwardYaw": -1.25,
    "panorama": {
     "hfov": 360,
     "thumbnailUrl": "media/panorama_567936AF_5CDB_8BA5_41B0_BD6D3E0130AA_t.jpg",
     "partial": false,
     "class": "Panorama",
     "adjacentPanoramas": [
      {
       "backwardYaw": -175.99,
       "panorama": "this.panorama_560A935F_5CDB_8AE5_41D7_043D9547A69E",
       "yaw": -1.25,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "backwardYaw": -0.32,
       "panorama": {
        "hfov": 360,
        "thumbnailUrl": "media/panorama_56A64DC6_5CDB_79E7_41A3_6A3A52D6AB7D_t.jpg",
        "partial": false,
        "class": "Panorama",
        "adjacentPanoramas": [
         {
          "backwardYaw": -179.49,
          "panorama": "this.panorama_567936AF_5CDB_8BA5_41B0_BD6D3E0130AA",
          "yaw": -0.32,
          "class": "AdjacentPanorama",
          "distance": 1
         },
         {
          "backwardYaw": -1.41,
          "panorama": {
           "hfov": 360,
           "thumbnailUrl": "media/panorama_56B064D8_5CDC_8FEB_41D4_2F7C4E9EBFFC_t.jpg",
           "partial": false,
           "class": "Panorama",
           "adjacentPanoramas": [
            {
             "backwardYaw": 1.12,
             "panorama": {
              "hfov": 360,
              "thumbnailUrl": "media/panorama_56ACBC3A_5CDC_9EAF_41C2_C0C00C44BAC5_t.jpg",
              "partial": false,
              "class": "Panorama",
              "adjacentPanoramas": [
               {
                "backwardYaw": -90.37,
                "panorama": {
                 "hfov": 360,
                 "thumbnailUrl": "media/panorama_56B18383_5CDC_8A5D_41D2_9F6B39605982_t.jpg",
                 "partial": false,
                 "class": "Panorama",
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": 93.06,
                   "panorama": "this.panorama_56ACBC3A_5CDC_9EAF_41C2_C0C00C44BAC5",
                   "yaw": -90.37,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  },
                  {
                   "backwardYaw": -175.36,
                   "panorama": {
                    "hfov": 360,
                    "thumbnailUrl": "media/panorama_56AC11D1_5CDC_89FD_41D3_E2AFECF3829B_t.jpg",
                    "partial": false,
                    "class": "Panorama",
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": 4.05,
                      "panorama": "this.panorama_56B18383_5CDC_8A5D_41D2_9F6B39605982",
                      "yaw": -175.36,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     },
                     {
                      "backwardYaw": 178.23,
                      "panorama": {
                       "hfov": 360,
                       "thumbnailUrl": "media/panorama_5686E739_5CDC_8AAD_41C0_31AE89F3FCCA_t.jpg",
                       "partial": false,
                       "class": "Panorama",
                       "adjacentPanoramas": [
                        {
                         "backwardYaw": -0.94,
                         "panorama": "this.panorama_56AC11D1_5CDC_89FD_41D3_E2AFECF3829B",
                         "yaw": 178.23,
                         "class": "AdjacentPanorama",
                         "distance": 1
                        }
                       ],
                       "id": "panorama_5686E739_5CDC_8AAD_41C0_31AE89F3FCCA",
                       "hfovMin": 60,
                       "pitch": 0,
                       "vfov": 180,
                       "label": "IMG_20231116_175755_00_merged",
                       "frames": [
                        {
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "height": 3040,
                            "width": 6080,
                            "url": "media/panorama_5686E739_5CDC_8AAD_41C0_31AE89F3FCCA_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 2001,
                            "width": 4002,
                            "url": "media/panorama_5686E739_5CDC_8AAD_41C0_31AE89F3FCCA.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ]
                         },
                         "overlays": [
                          {
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_56AC11D1_5CDC_89FD_41D3_E2AFECF3829B, this.camera_7D185716_70DB_1117_41D1_FDD144B39486); this.mainPlayList.set('selectedIndex', 6)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 47,
                                "width": 55,
                                "url": "media/panorama_5686E739_5CDC_8AAD_41C0_31AE89F3FCCA_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "hfov": 6.35,
                             "yaw": 178.23,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -13.04
                            }
                           ],
                           "id": "overlay_4E8ADB75_5D6C_FABA_41C7_215021EEBBB9",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "hfov": 6.35,
                             "yaw": 178.23,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 95,
                                "width": 110,
                                "url": "media/panorama_5686E739_5CDC_8AAD_41C0_31AE89F3FCCA_0_HS_0_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "pitch": -13.04
                            }
                           ]
                          },
                          {
                           "hfov": 24,
                           "id": "panorama_5686E739_5CDC_8AAD_41C0_31AE89F3FCCA_tcap0",
                           "angle": 0,
                           "rotate": true,
                           "inertia": true,
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "height": 1134,
                              "width": 1134,
                              "url": "media/panorama_560A935F_5CDB_8AE5_41D7_043D9547A69E_tcap0.png",
                              "class": "ImageResourceLevel"
                             }
                            ]
                           },
                           "class": "TripodCapPanoramaOverlay"
                          }
                         ],
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_5686E739_5CDC_8AAD_41C0_31AE89F3FCCA_t.jpg"
                        }
                       ],
                       "hfovMax": 120
                      },
                      "yaw": -0.94,
                      "class": "AdjacentPanorama",
                      "distance": 1
                     }
                    ],
                    "id": "panorama_56AC11D1_5CDC_89FD_41D3_E2AFECF3829B",
                    "hfovMin": 60,
                    "pitch": 0,
                    "vfov": 180,
                    "label": "IMG_20231116_174944_00_merged",
                    "frames": [
                     {
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 3040,
                         "width": 6080,
                         "url": "media/panorama_56AC11D1_5CDC_89FD_41D3_E2AFECF3829B_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 2001,
                         "width": 4002,
                         "url": "media/panorama_56AC11D1_5CDC_89FD_41D3_E2AFECF3829B.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_56B18383_5CDC_8A5D_41D2_9F6B39605982, this.camera_7DE416C7_70DB_1374_41C4_5558F7736A5A); this.mainPlayList.set('selectedIndex', 5)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 47,
                             "width": 55,
                             "url": "media/panorama_56AC11D1_5CDC_89FD_41D3_E2AFECF3829B_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "hfov": 6.43,
                          "yaw": -175.36,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -9.3
                         }
                        ],
                        "id": "overlay_4F9A35F4_5D24_89BB_41B4_A757C53B78C1",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "hfov": 6.43,
                          "yaw": -175.36,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 94,
                             "width": 110,
                             "url": "media/panorama_56AC11D1_5CDC_89FD_41D3_E2AFECF3829B_0_HS_0_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "pitch": -9.3
                         }
                        ]
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_5686E739_5CDC_8AAD_41C0_31AE89F3FCCA, this.camera_7D9F16C7_70DB_1374_41DA_ED1B957E5CEF); this.mainPlayList.set('selectedIndex', 7)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 47,
                             "width": 55,
                             "url": "media/panorama_56AC11D1_5CDC_89FD_41D3_E2AFECF3829B_0_HS_1_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "hfov": 6.34,
                          "yaw": -0.94,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -13.09
                         }
                        ],
                        "id": "overlay_498DF0FD_5D24_87A5_41C6_9A930C0BE8CB",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "hfov": 6.34,
                          "yaw": -0.94,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 95,
                             "width": 110,
                             "url": "media/panorama_56AC11D1_5CDC_89FD_41D3_E2AFECF3829B_0_HS_1_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "pitch": -13.09
                         }
                        ]
                       },
                       {
                        "hfov": 24,
                        "id": "panorama_56AC11D1_5CDC_89FD_41D3_E2AFECF3829B_tcap0",
                        "angle": 0,
                        "rotate": true,
                        "inertia": true,
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "height": 1134,
                           "width": 1134,
                           "url": "media/panorama_560A935F_5CDB_8AE5_41D7_043D9547A69E_tcap0.png",
                           "class": "ImageResourceLevel"
                          }
                         ]
                        },
                        "class": "TripodCapPanoramaOverlay"
                       }
                      ],
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_56AC11D1_5CDC_89FD_41D3_E2AFECF3829B_t.jpg"
                     }
                    ],
                    "hfovMax": 120
                   },
                   "yaw": 4.05,
                   "class": "AdjacentPanorama",
                   "distance": 1
                  }
                 ],
                 "id": "panorama_56B18383_5CDC_8A5D_41D2_9F6B39605982",
                 "hfovMin": 60,
                 "pitch": 0,
                 "vfov": 180,
                 "label": "IMG_20231116_174609_00_merged",
                 "frames": [
                  {
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 3040,
                      "width": 6080,
                      "url": "media/panorama_56B18383_5CDC_8A5D_41D2_9F6B39605982_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 2001,
                      "width": 4002,
                      "url": "media/panorama_56B18383_5CDC_8A5D_41D2_9F6B39605982.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_56ACBC3A_5CDC_9EAF_41C2_C0C00C44BAC5, this.camera_7DB4F6E6_70DB_1334_41D2_209FBEDDA83D); this.mainPlayList.set('selectedIndex', 4)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 60,
                          "width": 70,
                          "url": "media/panorama_56B18383_5CDC_8A5D_41D2_9F6B39605982_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "hfov": 7.71,
                       "yaw": -90.37,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -21.63
                      }
                     ],
                     "id": "overlay_4DE6F2A3_5CEF_8A5D_41BE_B3F3717441E3",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "hfov": 7.71,
                       "yaw": -90.37,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 120,
                          "width": 140,
                          "url": "media/panorama_56B18383_5CDC_8A5D_41D2_9F6B39605982_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": -21.63
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_56AC11D1_5CDC_89FD_41D3_E2AFECF3829B, this.camera_7DA316E6_70DB_1334_41B7_42669F06571D); this.mainPlayList.set('selectedIndex', 6)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 42,
                          "width": 50,
                          "url": "media/panorama_56B18383_5CDC_8A5D_41D2_9F6B39605982_0_HS_1_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "hfov": 5.8,
                       "yaw": 4.05,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -11.82
                      }
                     ],
                     "id": "overlay_4D781E99_5CE4_9A6A_41CA_B67EA150EA86",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "hfov": 5.8,
                       "yaw": 4.05,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 85,
                          "width": 100,
                          "url": "media/panorama_56B18383_5CDC_8A5D_41D2_9F6B39605982_0_HS_1_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": -11.82
                      }
                     ]
                    },
                    {
                     "hfov": 24,
                     "id": "panorama_56B18383_5CDC_8A5D_41D2_9F6B39605982_tcap0",
                     "angle": 0,
                     "rotate": true,
                     "inertia": true,
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "height": 1134,
                        "width": 1134,
                        "url": "media/panorama_560A935F_5CDB_8AE5_41D7_043D9547A69E_tcap0.png",
                        "class": "ImageResourceLevel"
                       }
                      ]
                     },
                     "class": "TripodCapPanoramaOverlay"
                    }
                   ],
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_56B18383_5CDC_8A5D_41D2_9F6B39605982_t.jpg"
                  }
                 ],
                 "hfovMax": 120
                },
                "yaw": 93.06,
                "class": "AdjacentPanorama",
                "distance": 1
               },
               {
                "backwardYaw": 174.14,
                "panorama": "this.panorama_56B064D8_5CDC_8FEB_41D4_2F7C4E9EBFFC",
                "yaw": 1.12,
                "class": "AdjacentPanorama",
                "distance": 1
               }
              ],
              "id": "panorama_56ACBC3A_5CDC_9EAF_41C2_C0C00C44BAC5",
              "hfovMin": 60,
              "pitch": 0,
              "vfov": 180,
              "label": "IMG_20231116_174505_00_merged",
              "frames": [
               {
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3040,
                   "width": 6080,
                   "url": "media/panorama_56ACBC3A_5CDC_9EAF_41C2_C0C00C44BAC5_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 2001,
                   "width": 4002,
                   "url": "media/panorama_56ACBC3A_5CDC_9EAF_41C2_C0C00C44BAC5.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ]
                },
                "overlays": [
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_56B064D8_5CDC_8FEB_41D4_2F7C4E9EBFFC, this.camera_7D6A9716_70DB_1117_41D0_BD48B7A22F14); this.mainPlayList.set('selectedIndex', 3)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 57,
                       "width": 65,
                       "url": "media/panorama_56ACBC3A_5CDC_9EAF_41C2_C0C00C44BAC5_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "hfov": 7.35,
                    "yaw": 1.12,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -17.36
                   }
                  ],
                  "id": "overlay_4C716CC6_5CE7_9FE7_41AD_4FE7204A0D9F",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "hfov": 7.35,
                    "yaw": 1.12,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 115,
                       "width": 130,
                       "url": "media/panorama_56ACBC3A_5CDC_9EAF_41C2_C0C00C44BAC5_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -17.36
                   }
                  ]
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_56B18383_5CDC_8A5D_41D2_9F6B39605982, this.camera_7D7C6710_70DB_12EB_41C1_024AA745A462); this.mainPlayList.set('selectedIndex', 5)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 50,
                       "width": 60,
                       "url": "media/panorama_56ACBC3A_5CDC_9EAF_41C2_C0C00C44BAC5_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "hfov": 6.61,
                    "yaw": 93.06,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -21.57
                   }
                  ],
                  "id": "overlay_4DF57422_5CED_8E5F_41D2_EAF174B74066",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "hfov": 6.61,
                    "yaw": 93.06,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 100,
                       "width": 120,
                       "url": "media/panorama_56ACBC3A_5CDC_9EAF_41C2_C0C00C44BAC5_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -21.57
                   }
                  ]
                 },
                 {
                  "hfov": 24,
                  "id": "panorama_56ACBC3A_5CDC_9EAF_41C2_C0C00C44BAC5_tcap0",
                  "angle": 0,
                  "rotate": true,
                  "inertia": true,
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "height": 1134,
                     "width": 1134,
                     "url": "media/panorama_560A935F_5CDB_8AE5_41D7_043D9547A69E_tcap0.png",
                     "class": "ImageResourceLevel"
                    }
                   ]
                  },
                  "class": "TripodCapPanoramaOverlay"
                 }
                ],
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_56ACBC3A_5CDC_9EAF_41C2_C0C00C44BAC5_t.jpg"
               }
              ],
              "hfovMax": 120
             },
             "yaw": 174.14,
             "class": "AdjacentPanorama",
             "distance": 1
            },
            {
             "backwardYaw": -179.8,
             "panorama": "this.panorama_56A64DC6_5CDB_79E7_41A3_6A3A52D6AB7D",
             "yaw": -1.41,
             "class": "AdjacentPanorama",
             "distance": 1
            }
           ],
           "id": "panorama_56B064D8_5CDC_8FEB_41D4_2F7C4E9EBFFC",
           "hfovMin": 60,
           "pitch": 0,
           "vfov": 180,
           "label": "IMG_20231116_174320_00_merged",
           "frames": [
            {
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3040,
                "width": 6080,
                "url": "media/panorama_56B064D8_5CDC_8FEB_41D4_2F7C4E9EBFFC_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 2001,
                "width": 4002,
                "url": "media/panorama_56B064D8_5CDC_8FEB_41D4_2F7C4E9EBFFC.jpeg",
                "class": "ImageResourceLevel"
               }
              ]
             },
             "overlays": [
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_56A64DC6_5CDB_79E7_41A3_6A3A52D6AB7D, this.camera_7DE956B7_70DB_1314_41B1_DE3539DADE90); this.mainPlayList.set('selectedIndex', 2)",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 60,
                    "width": 70,
                    "url": "media/panorama_56B064D8_5CDC_8FEB_41D4_2F7C4E9EBFFC_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "hfov": 7.47,
                 "yaw": -1.41,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -25.62
                }
               ],
               "id": "overlay_4C9C75B3_5CFF_89BE_41C5_BD57C0FD2179",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "items": [
                {
                 "hfov": 7.47,
                 "yaw": -1.41,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 120,
                    "width": 140,
                    "url": "media/panorama_56B064D8_5CDC_8FEB_41D4_2F7C4E9EBFFC_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -25.62
                }
               ]
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_56ACBC3A_5CDC_9EAF_41C2_C0C00C44BAC5, this.camera_7DFF06AB_70DB_133C_41D8_C7D530AAA623); this.mainPlayList.set('selectedIndex', 4)",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 50,
                    "width": 57,
                    "url": "media/panorama_56B064D8_5CDC_8FEB_41D4_2F7C4E9EBFFC_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "hfov": 6.56,
                 "yaw": 174.14,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -15.56
                }
               ],
               "id": "overlay_4C9A38B6_5CE4_87A6_41CE_F9ACF6D352DA",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "items": [
                {
                 "hfov": 6.56,
                 "yaw": 174.14,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 100,
                    "width": 114,
                    "url": "media/panorama_56B064D8_5CDC_8FEB_41D4_2F7C4E9EBFFC_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -15.56
                }
               ]
              },
              {
               "hfov": 24,
               "id": "panorama_56B064D8_5CDC_8FEB_41D4_2F7C4E9EBFFC_tcap0",
               "angle": 0,
               "rotate": true,
               "inertia": true,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "height": 1134,
                  "width": 1134,
                  "url": "media/panorama_560A935F_5CDB_8AE5_41D7_043D9547A69E_tcap0.png",
                  "class": "ImageResourceLevel"
                 }
                ]
               },
               "class": "TripodCapPanoramaOverlay"
              }
             ],
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_56B064D8_5CDC_8FEB_41D4_2F7C4E9EBFFC_t.jpg"
            }
           ],
           "hfovMax": 120
          },
          "yaw": -179.8,
          "class": "AdjacentPanorama",
          "distance": 1
         }
        ],
        "id": "panorama_56A64DC6_5CDB_79E7_41A3_6A3A52D6AB7D",
        "hfovMin": 60,
        "pitch": 0,
        "vfov": 180,
        "label": "IMG_20231116_174201_00_merged",
        "frames": [
         {
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3040,
             "width": 6080,
             "url": "media/panorama_56A64DC6_5CDB_79E7_41A3_6A3A52D6AB7D_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 2001,
             "width": 4002,
             "url": "media/panorama_56A64DC6_5CDB_79E7_41A3_6A3A52D6AB7D.jpeg",
             "class": "ImageResourceLevel"
            }
           ]
          },
          "overlays": [
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_567936AF_5CDB_8BA5_41B0_BD6D3E0130AA, this.camera_7D8BA6D7_70DB_1315_41D6_188D20AE71B9); this.mainPlayList.set('selectedIndex', 1)",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 51,
                 "width": 59,
                 "url": "media/panorama_56A64DC6_5CDB_79E7_41A3_6A3A52D6AB7D_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "hfov": 6.7,
              "yaw": -0.32,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -16.77
             }
            ],
            "id": "overlay_4CF9A97F_5CE7_86A5_41C0_3C35D6C5A599",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "items": [
             {
              "hfov": 6.7,
              "yaw": -0.32,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 103,
                 "width": 118,
                 "url": "media/panorama_56A64DC6_5CDB_79E7_41A3_6A3A52D6AB7D_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -16.77
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_56B064D8_5CDC_8FEB_41D4_2F7C4E9EBFFC, this.camera_7D8716D7_70DB_1315_41D1_ECDA8F6CEFE7); this.mainPlayList.set('selectedIndex', 3)",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 55,
                 "width": 65,
                 "url": "media/panorama_56A64DC6_5CDB_79E7_41A3_6A3A52D6AB7D_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "hfov": 7.09,
              "yaw": -179.8,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -22.93
             }
            ],
            "id": "overlay_4CF90853_5CFC_86FE_41A7_A7A709D9E048",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "items": [
             {
              "hfov": 7.09,
              "yaw": -179.8,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 110,
                 "width": 130,
                 "url": "media/panorama_56A64DC6_5CDB_79E7_41A3_6A3A52D6AB7D_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -22.93
             }
            ]
           },
           {
            "hfov": 24,
            "id": "panorama_56A64DC6_5CDB_79E7_41A3_6A3A52D6AB7D_tcap0",
            "angle": 0,
            "rotate": true,
            "inertia": true,
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "height": 1134,
               "width": 1134,
               "url": "media/panorama_560A935F_5CDB_8AE5_41D7_043D9547A69E_tcap0.png",
               "class": "ImageResourceLevel"
              }
             ]
            },
            "class": "TripodCapPanoramaOverlay"
           }
          ],
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_56A64DC6_5CDB_79E7_41A3_6A3A52D6AB7D_t.jpg"
         }
        ],
        "hfovMax": 120
       },
       "yaw": -179.49,
       "class": "AdjacentPanorama",
       "distance": 1
      }
     ],
     "id": "panorama_567936AF_5CDB_8BA5_41B0_BD6D3E0130AA",
     "hfovMin": 60,
     "pitch": 0,
     "vfov": 180,
     "label": "IMG_20231116_173946_00_merged",
     "frames": [
      {
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3040,
          "width": 6080,
          "url": "media/panorama_567936AF_5CDB_8BA5_41B0_BD6D3E0130AA_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_567936AF_5CDB_8BA5_41B0_BD6D3E0130AA.jpeg",
          "class": "ImageResourceLevel"
         }
        ]
       },
       "overlays": [
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_560A935F_5CDB_8AE5_41D7_043D9547A69E, this.camera_7D5006F6_70DB_1314_41CB_2DF32E031864); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 57,
              "width": 65,
              "url": "media/panorama_567936AF_5CDB_8BA5_41B0_BD6D3E0130AA_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "hfov": 7.14,
           "yaw": -1.25,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -23.08
          }
         ],
         "id": "overlay_523DE0C5_5CED_87E5_417D_DFDD5D239C22",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "items": [
          {
           "hfov": 7.14,
           "yaw": -1.25,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 115,
              "width": 130,
              "url": "media/panorama_567936AF_5CDB_8BA5_41B0_BD6D3E0130AA_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -23.08
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_56A64DC6_5CDB_79E7_41A3_6A3A52D6AB7D, this.camera_7D4F5706_70DB_12F7_41D8_81EE8CE386CE); this.mainPlayList.set('selectedIndex', 2)",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 49,
              "width": 54,
              "url": "media/panorama_567936AF_5CDB_8BA5_41B0_BD6D3E0130AA_0_HS_2_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "hfov": 6.25,
           "yaw": -179.49,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -16.47
          }
         ],
         "id": "overlay_5393C87B_5CE5_86AD_41C3_C2221F20233B",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "items": [
          {
           "hfov": 6.25,
           "yaw": -179.49,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 99,
              "width": 109,
              "url": "media/panorama_567936AF_5CDB_8BA5_41B0_BD6D3E0130AA_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -16.47
          }
         ]
        },
        {
         "hfov": 24,
         "id": "panorama_567936AF_5CDB_8BA5_41B0_BD6D3E0130AA_tcap0",
         "angle": 0,
         "rotate": true,
         "inertia": true,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "height": 1134,
            "width": 1134,
            "url": "media/panorama_560A935F_5CDB_8AE5_41D7_043D9547A69E_tcap0.png",
            "class": "ImageResourceLevel"
           }
          ]
         },
         "class": "TripodCapPanoramaOverlay"
        }
       ],
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_567936AF_5CDB_8BA5_41B0_BD6D3E0130AA_t.jpg"
      }
     ],
     "hfovMax": 120
    },
    "yaw": -175.99,
    "class": "AdjacentPanorama",
    "distance": 1
   }
  ],
  "id": "panorama_560A935F_5CDB_8AE5_41D7_043D9547A69E",
  "hfovMin": 60,
  "pitch": 0,
  "vfov": 180,
  "label": "IMG_20231116_173857_00_merged(1)",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_560A935F_5CDB_8AE5_41D7_043D9547A69E_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_560A935F_5CDB_8AE5_41D7_043D9547A69E.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_567936AF_5CDB_8BA5_41B0_BD6D3E0130AA, this.camera_7DC466AB_70DB_133C_41B7_6293B2FEB70E); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 57,
           "width": 65,
           "url": "media/panorama_560A935F_5CDB_8AE5_41D7_043D9547A69E_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "hfov": 7.07,
        "yaw": -175.99,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -23.35
       }
      ],
      "id": "overlay_5286234A_5CE7_8AEF_41D5_26540C100F88",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 7.07,
        "yaw": -175.99,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 130,
           "url": "media/panorama_560A935F_5CDB_8AE5_41D7_043D9547A69E_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -23.35
       }
      ]
     },
     {
      "hfov": 24,
      "id": "panorama_560A935F_5CDB_8AE5_41D7_043D9547A69E_tcap0",
      "angle": 0,
      "rotate": true,
      "inertia": true,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 1134,
         "width": 1134,
         "url": "media/panorama_560A935F_5CDB_8AE5_41D7_043D9547A69E_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "class": "TripodCapPanoramaOverlay"
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_560A935F_5CDB_8AE5_41D7_043D9547A69E_t.jpg"
   }
  ],
  "hfovMax": 120
 },
 {
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "touchControlMode": "drag_rotation",
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "id": "panorama_560A935F_5CDB_8AE5_41D7_043D9547A69E_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -176.55,
   "class": "PanoramaCameraPosition",
   "pitch": -7.8
  }
 },
 "this.panorama_567936AF_5CDB_8BA5_41B0_BD6D3E0130AA",
 {
  "id": "panorama_567936AF_5CDB_8BA5_41B0_BD6D3E0130AA_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_56A64DC6_5CDB_79E7_41A3_6A3A52D6AB7D",
 {
  "id": "panorama_56A64DC6_5CDB_79E7_41A3_6A3A52D6AB7D_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_56B064D8_5CDC_8FEB_41D4_2F7C4E9EBFFC",
 {
  "id": "panorama_56B064D8_5CDC_8FEB_41D4_2F7C4E9EBFFC_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_56ACBC3A_5CDC_9EAF_41C2_C0C00C44BAC5",
 {
  "id": "panorama_56ACBC3A_5CDC_9EAF_41C2_C0C00C44BAC5_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_56B18383_5CDC_8A5D_41D2_9F6B39605982",
 {
  "id": "panorama_56B18383_5CDC_8A5D_41D2_9F6B39605982_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_56AC11D1_5CDC_89FD_41D3_E2AFECF3829B",
 {
  "id": "panorama_56AC11D1_5CDC_89FD_41D3_E2AFECF3829B_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_5686E739_5CDC_8AAD_41C0_31AE89F3FCCA",
 {
  "id": "panorama_5686E739_5CDC_8AAD_41C0_31AE89F3FCCA_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
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
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_560A935F_5CDB_8AE5_41D7_043D9547A69E",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_560A935F_5CDB_8AE5_41D7_043D9547A69E_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_567936AF_5CDB_8BA5_41B0_BD6D3E0130AA",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_567936AF_5CDB_8BA5_41B0_BD6D3E0130AA_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_56A64DC6_5CDB_79E7_41A3_6A3A52D6AB7D",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_56A64DC6_5CDB_79E7_41A3_6A3A52D6AB7D_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_56B064D8_5CDC_8FEB_41D4_2F7C4E9EBFFC",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_56B064D8_5CDC_8FEB_41D4_2F7C4E9EBFFC_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_56ACBC3A_5CDC_9EAF_41C2_C0C00C44BAC5",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_56ACBC3A_5CDC_9EAF_41C2_C0C00C44BAC5_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_56B18383_5CDC_8A5D_41D2_9F6B39605982",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "camera": "this.panorama_56B18383_5CDC_8A5D_41D2_9F6B39605982_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_56AC11D1_5CDC_89FD_41D3_E2AFECF3829B",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "camera": "this.panorama_56AC11D1_5CDC_89FD_41D3_E2AFECF3829B_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_5686E739_5CDC_8AAD_41C0_31AE89F3FCCA",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 0)",
    "camera": "this.panorama_5686E739_5CDC_8AAD_41C0_31AE89F3FCCA_camera",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 {
  "id": "camera_7DC466AB_70DB_133C_41B7_6293B2FEB70E",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 178.75,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_7DFF06AB_70DB_133C_41D8_C7D530AAA623",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -178.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_7DE956B7_70DB_1314_41B1_DE3539DADE90",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0.2,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_7DE416C7_70DB_1374_41C4_5558F7736A5A",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -175.95,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_7D9F16C7_70DB_1374_41DA_ED1B957E5CEF",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -1.77,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_7D8BA6D7_70DB_1315_41D6_188D20AE71B9",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0.51,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_7D8716D7_70DB_1315_41D1_ECDA8F6CEFE7",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 178.59,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_7DB4F6E6_70DB_1334_41D2_209FBEDDA83D",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -86.94,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_7DA316E6_70DB_1334_41B7_42669F06571D",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 4.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_7D5006F6_70DB_1314_41CB_2DF32E031864",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 4.01,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_7D4F5706_70DB_12F7_41D8_81EE8CE386CE",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 179.68,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_7D7C6710_70DB_12EB_41C1_024AA745A462",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 89.63,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_7D6A9716_70DB_1117_41D0_BD48B7A22F14",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -5.86,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_7D185716_70DB_1117_41D1_FDD144B39486",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 179.06,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "data": {
   "label": "Reza_-_\u0639\u0645\u0631_\u0627\u0632_\u06a9\u0641_\u0631\u0627\u06cc\u06af\u0627\u0646\u06cc_\u0645\u06cc_\u0631\u0648\u062f_\u06a9\u0648\u062f\u06a9\u06cc_\u0631\u0641\u062a_\u0648_\u062c\u0648\u0627\u0646\u06cc_\u0645\u06cc_\u0631\u0648\u062f"
  },
  "autoplay": true,
  "id": "audio_7A60E7F2_708A_8B75_41D8_D93A40A09E8C",
  "audio": {
   "oggUrl": "media/audio_7A60E7F2_708A_8B75_41D8_D93A40A09E8C.ogg",
   "mp3Url": "media/audio_7A60E7F2_708A_8B75_41D8_D93A40A09E8C.mp3",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 }
], "children": [
 {
  "progressHeight": 10,
  "progressBarOpacity": 1,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipShadowSpread": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipBackgroundColor": "#F6F6F6",
  "paddingRight": 0,
  "toolTipPaddingTop": 4,
  "toolTipTextShadowOpacity": 0,
  "borderRadius": 0,
  "transitionMode": "blending",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipBorderColor": "#767676",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBorderSize": 0,
  "minWidth": 100,
  "toolTipShadowOpacity": 1,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBorderSize": 0,
  "borderSize": 0,
  "playbackBarBorderSize": 0,
  "shadow": false,
  "class": "ViewerArea",
  "progressBorderColor": "#000000",
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipFontSize": 12,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontColor": "#606060",
  "progressBorderRadius": 0,
  "progressRight": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowColor": "#333333",
  "paddingBottom": 0,
  "progressBarBorderRadius": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "height": "100%",
  "playbackBarProgressBorderColor": "#000000",
  "width": "100%",
  "playbackBarBorderRadius": 0,
  "toolTipBorderRadius": 3,
  "toolTipPaddingBottom": 4,
  "paddingLeft": 0,
  "paddingTop": 0,
  "progressLeft": 0,
  "toolTipPaddingRight": 6,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "transitionDuration": 500,
  "playbackBarLeft": 0,
  "toolTipFontFamily": "Arial",
  "progressOpacity": 1,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadHeight": 15,
  "minHeight": 50,
  "progressBarBorderSize": 0,
  "playbackBarHeight": 10,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadWidth": 6,
  "toolTipFontStyle": "normal",
  "id": "MainViewer",
  "progressBottom": 0,
  "progressBarBorderColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "playbackBarHeadBorderRadius": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarBottom": 5,
  "toolTipPaddingLeft": 6,
  "toolTipDisplayTime": 600,
  "playbackBarOpacity": 1,
  "toolTipBorderSize": 1,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarRight": 0,
  "toolTipOpacity": 1,
  "progressBackgroundColor": [
   "#FFFFFF"
  ]
 }
], 
 "scrollBarColor": "#000000",
 "creationPolicy": "delayed",
 "mobileMipmappingEnabled": false,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "width": "100%",
 "height": "100%",
 "paddingRight": 0,
 "backgroundPreloadEnabled": true,
 "borderRadius": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "paddingTop": 0,
 "overflow": "visible",
 "minWidth": 20,
 "borderSize": 0,
 "contentOpaque": false,
 "minHeight": 20,
 "vrPolyfillScale": 0.5,
 "gap": 10,
 "shadow": false,
 "class": "Player",
 "scrollBarMargin": 2,
 "id": "rootPlayer",
 "scrollBarWidth": 10,
 "data": {
  "name": "Player424"
 },
 "start": "this.playAudioList([this.audio_7A60E7F2_708A_8B75_41D8_D93A40A09E8C]); this.mainPlayList.set('selectedIndex', 0)",
 "paddingBottom": 0,
 "scripts": {
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getKey": function(key){  return window[key]; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "existsKey": function(key){  return key in window; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "registerKey": function(key, value){  window[key] = value; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); }
 },
 "mouseWheelEnabled": true
})