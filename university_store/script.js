TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "partial": false,
  "id": "panorama_538BD9DA_5891_A838_41CF_69237A394718",
  "thumbnailUrl": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_t.jpg",
  "pitch": 0,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 1500,
       "class": "ImageResourceLevel",
       "width": 3000,
       "url": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_hq.jpeg"
      },
      {
       "height": 1000,
       "class": "ImageResourceLevel",
       "width": 2001,
       "url": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_t.jpg",
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_523C09FE_5890_ABF8_41C0_8565FDF70075, this.camera_44006E05_4A9A_7492_41C0_F83C35F3F2F7); this.mainPlayList.set('selectedIndex', 22)"
       }
      ],
      "id": "overlay_55132965_58B1_E808_41D5_27173F9AAF99",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.32,
        "yaw": -179.66,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 28,
           "class": "ImageResourceLevel",
           "width": 32,
           "url": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -19.4
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -179.66,
        "hfov": 7.32,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 56,
           "class": "ImageResourceLevel",
           "width": 64,
           "url": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -19.4
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_52605FD4_5891_A808_41B9_7F3362CF34FE, this.camera_44165DF5_4A9A_777D_41BC_494DE7DE5F67); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "id": "overlay_57800A75_58B0_E808_41A4_E014F29FC7C8",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.42,
        "yaw": -80.57,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 28,
           "class": "ImageResourceLevel",
           "width": 32,
           "url": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -16.93
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -80.57,
        "hfov": 7.42,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 56,
           "class": "ImageResourceLevel",
           "width": 64,
           "url": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -16.93
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_538BD9DA_5891_A838_41CF_69237A394718_tcap0",
      "angle": 0,
      "rotate": true,
      "hfov": 26.4,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 1134,
         "class": "ImageResourceLevel",
         "width": 1134,
         "url": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_tcap0.png"
        }
       ]
      },
      "inertia": true
     }
    ]
   }
  ],
  "label": "001",
  "hfovMax": 120,
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "class": "Panorama",
     "partial": false,
     "id": "panorama_52605FD4_5891_A808_41B9_7F3362CF34FE",
     "thumbnailUrl": "media/panorama_52605FD4_5891_A808_41B9_7F3362CF34FE_t.jpg",
     "pitch": 0,
     "frames": [
      {
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 1500,
          "class": "ImageResourceLevel",
          "width": 3000,
          "url": "media/panorama_52605FD4_5891_A808_41B9_7F3362CF34FE_hq.jpeg"
         },
         {
          "height": 1000,
          "class": "ImageResourceLevel",
          "width": 2001,
          "url": "media/panorama_52605FD4_5891_A808_41B9_7F3362CF34FE.jpeg"
         }
        ]
       },
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_52605FD4_5891_A808_41B9_7F3362CF34FE_t.jpg",
       "overlays": [
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_538BD9DA_5891_A838_41CF_69237A394718, this.camera_4452AE63_4A9A_7496_41D2_93EB4B1722F6); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "id": "overlay_561DCB24_58B0_6808_41BA_217D39B5BF6B",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 7.25,
           "yaw": 89.07,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 28,
              "class": "ImageResourceLevel",
              "width": 32,
              "url": "media/panorama_52605FD4_5891_A808_41B9_7F3362CF34FE_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -20.78
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 89.07,
           "hfov": 7.25,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 56,
              "class": "ImageResourceLevel",
              "width": 64,
              "url": "media/panorama_52605FD4_5891_A808_41B9_7F3362CF34FE_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -20.78
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_523BB595_5891_9808_41D2_C0E662D7BB96, this.camera_4467BE53_4A9A_74B6_4162_1321650A5FA2); this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "id": "overlay_4AA02DE8_58B1_E819_41C6_7A9347FECC82",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 7.36,
           "yaw": -89,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 28,
              "class": "ImageResourceLevel",
              "width": 32,
              "url": "media/panorama_52605FD4_5891_A808_41B9_7F3362CF34FE_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -18.33
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -89,
           "hfov": 7.36,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 56,
              "class": "ImageResourceLevel",
              "width": 64,
              "url": "media/panorama_52605FD4_5891_A808_41B9_7F3362CF34FE_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -18.33
          }
         ]
        },
        {
         "class": "TripodCapPanoramaOverlay",
         "id": "panorama_52605FD4_5891_A808_41B9_7F3362CF34FE_tcap0",
         "angle": 0,
         "rotate": true,
         "hfov": 26.4,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "height": 1134,
            "class": "ImageResourceLevel",
            "width": 1134,
            "url": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_tcap0.png"
           }
          ]
         },
         "inertia": true
        }
       ]
      }
     ],
     "label": "002",
     "hfovMax": 120,
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "partial": false,
        "id": "panorama_523BB595_5891_9808_41D2_C0E662D7BB96",
        "thumbnailUrl": "media/panorama_523BB595_5891_9808_41D2_C0E662D7BB96_t.jpg",
        "pitch": 0,
        "frames": [
         {
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 1500,
             "class": "ImageResourceLevel",
             "width": 3000,
             "url": "media/panorama_523BB595_5891_9808_41D2_C0E662D7BB96_hq.jpeg"
            },
            {
             "height": 1000,
             "class": "ImageResourceLevel",
             "width": 2001,
             "url": "media/panorama_523BB595_5891_9808_41D2_C0E662D7BB96.jpeg"
            }
           ]
          },
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_523BB595_5891_9808_41D2_C0E662D7BB96_t.jpg",
          "overlays": [
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_52605FD4_5891_A808_41B9_7F3362CF34FE, this.camera_442A2DD6_4A9A_77BE_41BE_00294D9EAA82); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "id": "overlay_480E2C86_58B0_A808_41D3_31C4985DE10F",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 7.44,
              "yaw": 90.43,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 28,
                 "class": "ImageResourceLevel",
                 "width": 32,
                 "url": "media/panorama_523BB595_5891_9808_41D2_C0E662D7BB96_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -16.54
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 90.43,
              "hfov": 7.44,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 56,
                 "class": "ImageResourceLevel",
                 "width": 64,
                 "url": "media/panorama_523BB595_5891_9808_41D2_C0E662D7BB96_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -16.54
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_523C1B0D_5891_E818_41CD_A6BF6C6AB1C8, this.camera_44234DD6_4A9A_77BE_41B3_26D130620635); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "id": "overlay_4A9D6603_58B3_B808_41CA_00AC90FCBA89",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 7.47,
              "yaw": -88.19,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 28,
                 "class": "ImageResourceLevel",
                 "width": 32,
                 "url": "media/panorama_523BB595_5891_9808_41D2_C0E662D7BB96_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -15.7
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -88.19,
              "hfov": 7.47,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 56,
                 "class": "ImageResourceLevel",
                 "width": 64,
                 "url": "media/panorama_523BB595_5891_9808_41D2_C0E662D7BB96_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -15.7
             }
            ]
           },
           {
            "class": "TripodCapPanoramaOverlay",
            "id": "panorama_523BB595_5891_9808_41D2_C0E662D7BB96_tcap0",
            "angle": 0,
            "rotate": true,
            "hfov": 26.4,
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "height": 1134,
               "class": "ImageResourceLevel",
               "width": 1134,
               "url": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_tcap0.png"
              }
             ]
            },
            "inertia": true
           }
          ]
         }
        ],
        "label": "003",
        "hfovMax": 120,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_52605FD4_5891_A808_41B9_7F3362CF34FE",
          "yaw": 90.43,
          "backwardYaw": -89,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "partial": false,
           "id": "panorama_523C1B0D_5891_E818_41CD_A6BF6C6AB1C8",
           "thumbnailUrl": "media/panorama_523C1B0D_5891_E818_41CD_A6BF6C6AB1C8_t.jpg",
           "pitch": 0,
           "frames": [
            {
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 1500,
                "class": "ImageResourceLevel",
                "width": 3000,
                "url": "media/panorama_523C1B0D_5891_E818_41CD_A6BF6C6AB1C8_hq.jpeg"
               },
               {
                "height": 1000,
                "class": "ImageResourceLevel",
                "width": 2001,
                "url": "media/panorama_523C1B0D_5891_E818_41CD_A6BF6C6AB1C8.jpeg"
               }
              ]
             },
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_523C1B0D_5891_E818_41CD_A6BF6C6AB1C8_t.jpg",
             "overlays": [
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_523BB595_5891_9808_41D2_C0E662D7BB96, this.camera_44D56047_4A9A_6C9E_41CA_2FB11523171C); this.mainPlayList.set('selectedIndex', 2)"
                }
               ],
               "id": "overlay_49E5CD65_58B0_E808_41C5_4341F23EBFD5",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 7.43,
                 "yaw": 89.46,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 28,
                    "class": "ImageResourceLevel",
                    "width": 32,
                    "url": "media/panorama_523C1B0D_5891_E818_41CD_A6BF6C6AB1C8_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -16.65
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 89.46,
                 "hfov": 7.43,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 56,
                    "class": "ImageResourceLevel",
                    "width": 64,
                    "url": "media/panorama_523C1B0D_5891_E818_41CD_A6BF6C6AB1C8_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -16.65
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_5238A09D_5891_F838_41D3_B0C187F9890E, this.camera_44CFB047_4A9A_6C9E_41CA_EC3F2B94196F); this.mainPlayList.set('selectedIndex', 4)"
                }
               ],
               "id": "overlay_49FBA64C_58B1_B818_41AB_486B064F8236",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 7.45,
                 "yaw": -89.96,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 28,
                    "class": "ImageResourceLevel",
                    "width": 32,
                    "url": "media/panorama_523C1B0D_5891_E818_41CD_A6BF6C6AB1C8_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -16.26
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -89.96,
                 "hfov": 7.45,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 56,
                    "class": "ImageResourceLevel",
                    "width": 64,
                    "url": "media/panorama_523C1B0D_5891_E818_41CD_A6BF6C6AB1C8_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -16.26
                }
               ]
              },
              {
               "class": "TripodCapPanoramaOverlay",
               "id": "panorama_523C1B0D_5891_E818_41CD_A6BF6C6AB1C8_tcap0",
               "angle": 0,
               "rotate": true,
               "hfov": 26.4,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "height": 1134,
                  "class": "ImageResourceLevel",
                  "width": 1134,
                  "url": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_tcap0.png"
                 }
                ]
               },
               "inertia": true
              }
             ]
            }
           ],
           "label": "004",
           "hfovMax": 120,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_523BB595_5891_9808_41D2_C0E662D7BB96",
             "yaw": 89.46,
             "backwardYaw": -88.19,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "class": "Panorama",
              "partial": false,
              "id": "panorama_5238A09D_5891_F838_41D3_B0C187F9890E",
              "thumbnailUrl": "media/panorama_5238A09D_5891_F838_41D3_B0C187F9890E_t.jpg",
              "pitch": 0,
              "frames": [
               {
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 1500,
                   "class": "ImageResourceLevel",
                   "width": 3000,
                   "url": "media/panorama_5238A09D_5891_F838_41D3_B0C187F9890E_hq.jpeg"
                  },
                  {
                   "height": 1000,
                   "class": "ImageResourceLevel",
                   "width": 2001,
                   "url": "media/panorama_5238A09D_5891_F838_41D3_B0C187F9890E.jpeg"
                  }
                 ]
                },
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_5238A09D_5891_F838_41D3_B0C187F9890E_t.jpg",
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_523C1B0D_5891_E818_41CD_A6BF6C6AB1C8, this.camera_44F28028_4A9A_6C92_41AB_15CB510A80F1); this.mainPlayList.set('selectedIndex', 3)"
                   }
                  ],
                  "id": "overlay_492CD326_58B3_9808_41C0_2C512F053B0F",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 7.43,
                    "yaw": 88.55,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 28,
                       "class": "ImageResourceLevel",
                       "width": 32,
                       "url": "media/panorama_5238A09D_5891_F838_41D3_B0C187F9890E_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -16.69
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 88.55,
                    "hfov": 7.43,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 56,
                       "class": "ImageResourceLevel",
                       "width": 64,
                       "url": "media/panorama_5238A09D_5891_F838_41D3_B0C187F9890E_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -16.69
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_523E161D_5891_F838_41B8_718A76891998, this.camera_44F90018_4A9A_6CB3_41D2_444C7702D815); this.mainPlayList.set('selectedIndex', 5)"
                   }
                  ],
                  "id": "overlay_49672992_58B0_A808_41AF_AC416C0E4664",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 7.5,
                    "yaw": -90.77,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 28,
                       "class": "ImageResourceLevel",
                       "width": 32,
                       "url": "media/panorama_5238A09D_5891_F838_41D3_B0C187F9890E_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -14.9
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -90.77,
                    "hfov": 7.5,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 56,
                       "class": "ImageResourceLevel",
                       "width": 64,
                       "url": "media/panorama_5238A09D_5891_F838_41D3_B0C187F9890E_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -14.9
                   }
                  ]
                 },
                 {
                  "class": "TripodCapPanoramaOverlay",
                  "id": "panorama_5238A09D_5891_F838_41D3_B0C187F9890E_tcap0",
                  "angle": 0,
                  "rotate": true,
                  "hfov": 26.4,
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "height": 1134,
                     "class": "ImageResourceLevel",
                     "width": 1134,
                     "url": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_tcap0.png"
                    }
                   ]
                  },
                  "inertia": true
                 }
                ]
               }
              ],
              "label": "005",
              "hfovMax": 120,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "class": "Panorama",
                 "partial": false,
                 "id": "panorama_523E161D_5891_F838_41B8_718A76891998",
                 "thumbnailUrl": "media/panorama_523E161D_5891_F838_41B8_718A76891998_t.jpg",
                 "pitch": 0,
                 "frames": [
                  {
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 1500,
                      "class": "ImageResourceLevel",
                      "width": 3000,
                      "url": "media/panorama_523E161D_5891_F838_41B8_718A76891998_hq.jpeg"
                     },
                     {
                      "height": 1000,
                      "class": "ImageResourceLevel",
                      "width": 2001,
                      "url": "media/panorama_523E161D_5891_F838_41B8_718A76891998.jpeg"
                     }
                    ]
                   },
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_523E161D_5891_F838_41B8_718A76891998_t.jpg",
                   "overlays": [
                    {
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_5238A09D_5891_F838_41D3_B0C187F9890E, this.camera_44B74FDA_4A9A_73B6_41CE_73BDD4A6F753); this.mainPlayList.set('selectedIndex', 4)"
                      }
                     ],
                     "id": "overlay_4A941AD1_58B0_6808_41BD_0301C085EDFB",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 7.46,
                       "yaw": 90.42,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 28,
                          "class": "ImageResourceLevel",
                          "width": 32,
                          "url": "media/panorama_523E161D_5891_F838_41B8_718A76891998_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -15.95
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 90.42,
                       "hfov": 7.46,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 56,
                          "class": "ImageResourceLevel",
                          "width": 64,
                          "url": "media/panorama_523E161D_5891_F838_41B8_718A76891998_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -15.95
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_52397B1E_5891_E838_41B3_D86C1767CABA, this.camera_44B0AFCA_4A9A_7396_41B6_7E41DEEA562D); this.mainPlayList.set('selectedIndex', 6)"
                      }
                     ],
                     "id": "overlay_4AE16A0C_58B1_A818_41CD_5FA03485C33E",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 7.32,
                       "yaw": -90.72,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 28,
                          "class": "ImageResourceLevel",
                          "width": 32,
                          "url": "media/panorama_523E161D_5891_F838_41B8_718A76891998_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -19.31
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -90.72,
                       "hfov": 7.32,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 56,
                          "class": "ImageResourceLevel",
                          "width": 64,
                          "url": "media/panorama_523E161D_5891_F838_41B8_718A76891998_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": -19.31
                      }
                     ]
                    },
                    {
                     "class": "TripodCapPanoramaOverlay",
                     "id": "panorama_523E161D_5891_F838_41B8_718A76891998_tcap0",
                     "angle": 0,
                     "rotate": true,
                     "hfov": 26.4,
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "height": 1134,
                        "class": "ImageResourceLevel",
                        "width": 1134,
                        "url": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_tcap0.png"
                       }
                      ]
                     },
                     "inertia": true
                    }
                   ]
                  }
                 ],
                 "label": "006",
                 "hfovMax": 120,
                 "hfovMin": 60,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "class": "Panorama",
                    "partial": false,
                    "id": "panorama_52397B1E_5891_E838_41B3_D86C1767CABA",
                    "thumbnailUrl": "media/panorama_52397B1E_5891_E838_41B3_D86C1767CABA_t.jpg",
                    "pitch": 0,
                    "frames": [
                     {
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 1500,
                         "class": "ImageResourceLevel",
                         "width": 3000,
                         "url": "media/panorama_52397B1E_5891_E838_41B3_D86C1767CABA_hq.jpeg"
                        },
                        {
                         "height": 1000,
                         "class": "ImageResourceLevel",
                         "width": 2001,
                         "url": "media/panorama_52397B1E_5891_E838_41B3_D86C1767CABA.jpeg"
                        }
                       ]
                      },
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_52397B1E_5891_E838_41B3_D86C1767CABA_t.jpg",
                      "overlays": [
                       {
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_523E161D_5891_F838_41B8_718A76891998, this.camera_45052F4D_4A9A_7492_41B9_B6F0456206C1); this.mainPlayList.set('selectedIndex', 5)"
                         }
                        ],
                        "id": "overlay_4B842425_5890_9808_41C4_B1CAFE887ECF",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 7.47,
                          "yaw": 86.68,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 28,
                             "class": "ImageResourceLevel",
                             "width": 32,
                             "url": "media/panorama_52397B1E_5891_E838_41B3_D86C1767CABA_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -15.76
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 86.68,
                          "hfov": 7.47,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 56,
                             "class": "ImageResourceLevel",
                             "width": 64,
                             "url": "media/panorama_52397B1E_5891_E838_41B3_D86C1767CABA_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": -15.76
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_523F1006_5891_9808_41D5_D33CC8A08930, this.camera_45176F3F_4A9A_74EE_41C5_4F91EFDF4A52); this.mainPlayList.set('selectedIndex', 7)"
                         }
                        ],
                        "id": "overlay_4CF9330C_5891_B818_4195_42CB2B0A1BE4",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 7.65,
                          "yaw": -92.1,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 21,
                             "class": "ImageResourceLevel",
                             "width": 32,
                             "url": "media/panorama_52397B1E_5891_E838_41B3_D86C1767CABA_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -9.37
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -92.1,
                          "hfov": 7.65,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 43,
                             "class": "ImageResourceLevel",
                             "width": 64,
                             "url": "media/panorama_52397B1E_5891_E838_41B3_D86C1767CABA_0_HS_1_0.png"
                            }
                           ]
                          },
                          "pitch": -9.37
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_523BFF01_5890_A808_41C2_34D07AB0CB8C, this.camera_45724F4D_4A9A_7492_41D1_EAB257913FDF); this.mainPlayList.set('selectedIndex', 23)"
                         }
                        ],
                        "id": "overlay_450DE683_58F0_7808_41CB_5B56C475DF86",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 7.08,
                          "yaw": -179.85,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 28,
                             "class": "ImageResourceLevel",
                             "width": 32,
                             "url": "media/panorama_52397B1E_5891_E838_41B3_D86C1767CABA_0_HS_2_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -24.05
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -179.85,
                          "hfov": 7.08,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 56,
                             "class": "ImageResourceLevel",
                             "width": 64,
                             "url": "media/panorama_52397B1E_5891_E838_41B3_D86C1767CABA_0_HS_2_0.png"
                            }
                           ]
                          },
                          "pitch": -24.05
                         }
                        ]
                       },
                       {
                        "class": "TripodCapPanoramaOverlay",
                        "id": "panorama_52397B1E_5891_E838_41B3_D86C1767CABA_tcap0",
                        "angle": 0,
                        "rotate": true,
                        "hfov": 26.4,
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "height": 1134,
                           "class": "ImageResourceLevel",
                           "width": 1134,
                           "url": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_tcap0.png"
                          }
                         ]
                        },
                        "inertia": true
                       }
                      ]
                     }
                    ],
                    "label": "007",
                    "hfovMax": 120,
                    "hfovMin": 60,
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "class": "Panorama",
                       "partial": false,
                       "id": "panorama_523F1006_5891_9808_41D5_D33CC8A08930",
                       "thumbnailUrl": "media/panorama_523F1006_5891_9808_41D5_D33CC8A08930_t.jpg",
                       "pitch": 0,
                       "frames": [
                        {
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "height": 1500,
                            "class": "ImageResourceLevel",
                            "width": 3000,
                            "url": "media/panorama_523F1006_5891_9808_41D5_D33CC8A08930_hq.jpeg"
                           },
                           {
                            "height": 1000,
                            "class": "ImageResourceLevel",
                            "width": 2001,
                            "url": "media/panorama_523F1006_5891_9808_41D5_D33CC8A08930.jpeg"
                           }
                          ]
                         },
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_523F1006_5891_9808_41D5_D33CC8A08930_t.jpg",
                         "overlays": [
                          {
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_52397B1E_5891_E838_41B3_D86C1767CABA, this.camera_45B60EA1_4A9A_7592_41C5_EC799343A70E); this.mainPlayList.set('selectedIndex', 6)"
                            }
                           ],
                           "id": "overlay_4B053A94_5890_A808_41C9_FCE62D407882",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 7.61,
                             "yaw": -92.15,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 28,
                                "class": "ImageResourceLevel",
                                "width": 32,
                                "url": "media/panorama_523F1006_5891_9808_41D5_D33CC8A08930_0_HS_0_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -10.97
                            }
                           ],
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           },
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -92.15,
                             "hfov": 7.61,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 56,
                                "class": "ImageResourceLevel",
                                "width": 64,
                                "url": "media/panorama_523F1006_5891_9808_41D5_D33CC8A08930_0_HS_0_0.png"
                               }
                              ]
                             },
                             "pitch": -10.97
                            }
                           ]
                          },
                          {
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_520E8515_5891_9808_41D4_D3A0074DB064, this.camera_45A42EC1_4A9A_7592_41C4_B5D0E07F5723); this.mainPlayList.set('selectedIndex', 8)"
                            }
                           ],
                           "id": "overlay_4C05768E_589F_9818_41C7_CF0945966771",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 7.46,
                             "yaw": 88.02,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 28,
                                "class": "ImageResourceLevel",
                                "width": 32,
                                "url": "media/panorama_523F1006_5891_9808_41D5_D33CC8A08930_0_HS_1_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -15.95
                            }
                           ],
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           },
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 88.02,
                             "hfov": 7.46,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 56,
                                "class": "ImageResourceLevel",
                                "width": 64,
                                "url": "media/panorama_523F1006_5891_9808_41D5_D33CC8A08930_0_HS_1_0.png"
                               }
                              ]
                             },
                             "pitch": -15.95
                            }
                           ]
                          },
                          {
                           "class": "TripodCapPanoramaOverlay",
                           "id": "panorama_523F1006_5891_9808_41D5_D33CC8A08930_tcap0",
                           "angle": 0,
                           "rotate": true,
                           "hfov": 26.4,
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "height": 1134,
                              "class": "ImageResourceLevel",
                              "width": 1134,
                              "url": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_tcap0.png"
                             }
                            ]
                           },
                           "inertia": true
                          }
                         ]
                        }
                       ],
                       "label": "008",
                       "hfovMax": 120,
                       "hfovMin": 60,
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_52397B1E_5891_E838_41B3_D86C1767CABA",
                         "yaw": -92.15,
                         "backwardYaw": -92.1,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "class": "Panorama",
                          "partial": false,
                          "id": "panorama_520E8515_5891_9808_41D4_D3A0074DB064",
                          "thumbnailUrl": "media/panorama_520E8515_5891_9808_41D4_D3A0074DB064_t.jpg",
                          "pitch": 0,
                          "frames": [
                           {
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "height": 1500,
                               "class": "ImageResourceLevel",
                               "width": 3000,
                               "url": "media/panorama_520E8515_5891_9808_41D4_D3A0074DB064_hq.jpeg"
                              },
                              {
                               "height": 1000,
                               "class": "ImageResourceLevel",
                               "width": 2001,
                               "url": "media/panorama_520E8515_5891_9808_41D4_D3A0074DB064.jpeg"
                              }
                             ]
                            },
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_520E8515_5891_9808_41D4_D3A0074DB064_t.jpg",
                            "overlays": [
                             {
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_523F1006_5891_9808_41D5_D33CC8A08930, this.camera_45DD3F0F_4A9A_74AE_41D0_A29B769467D4); this.mainPlayList.set('selectedIndex', 7)"
                               }
                              ],
                              "id": "overlay_4C2F03D9_5891_9838_4185_BEA68CE4C00B",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 7.4,
                                "yaw": -89.45,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 28,
                                   "class": "ImageResourceLevel",
                                   "width": 32,
                                   "url": "media/panorama_520E8515_5891_9808_41D4_D3A0074DB064_0_HS_0_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -17.43
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              },
                              "rollOverDisplay": false,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -89.45,
                                "hfov": 7.4,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 56,
                                   "class": "ImageResourceLevel",
                                   "width": 64,
                                   "url": "media/panorama_520E8515_5891_9808_41D4_D3A0074DB064_0_HS_0_0.png"
                                  }
                                 ]
                                },
                                "pitch": -17.43
                               }
                              ]
                             },
                             {
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_520C89FC_5891_ABF8_41C7_2B8DB08869F7, this.camera_45CB3F1E_4A9A_74AE_41B9_115F83FCD67F); this.mainPlayList.set('selectedIndex', 9)"
                               }
                              ],
                              "id": "overlay_4D03E111_5890_B808_41D3_8D579DC9B19E",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 7.5,
                                "yaw": 90.55,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 28,
                                   "class": "ImageResourceLevel",
                                   "width": 32,
                                   "url": "media/panorama_520E8515_5891_9808_41D4_D3A0074DB064_0_HS_1_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -14.71
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              },
                              "rollOverDisplay": false,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 90.55,
                                "hfov": 7.5,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 56,
                                   "class": "ImageResourceLevel",
                                   "width": 64,
                                   "url": "media/panorama_520E8515_5891_9808_41D4_D3A0074DB064_0_HS_1_0.png"
                                  }
                                 ]
                                },
                                "pitch": -14.71
                               }
                              ]
                             },
                             {
                              "class": "TripodCapPanoramaOverlay",
                              "id": "panorama_520E8515_5891_9808_41D4_D3A0074DB064_tcap0",
                              "angle": 0,
                              "rotate": true,
                              "hfov": 26.4,
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "height": 1134,
                                 "class": "ImageResourceLevel",
                                 "width": 1134,
                                 "url": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_tcap0.png"
                                }
                               ]
                              },
                              "inertia": true
                             }
                            ]
                           }
                          ],
                          "label": "009",
                          "hfovMax": 120,
                          "hfovMin": 60,
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_523F1006_5891_9808_41D5_D33CC8A08930",
                            "yaw": -89.45,
                            "backwardYaw": 88.02,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "class": "Panorama",
                             "partial": false,
                             "id": "panorama_520C89FC_5891_ABF8_41C7_2B8DB08869F7",
                             "thumbnailUrl": "media/panorama_520C89FC_5891_ABF8_41C7_2B8DB08869F7_t.jpg",
                             "pitch": 0,
                             "frames": [
                              {
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "height": 1500,
                                  "class": "ImageResourceLevel",
                                  "width": 3000,
                                  "url": "media/panorama_520C89FC_5891_ABF8_41C7_2B8DB08869F7_hq.jpeg"
                                 },
                                 {
                                  "height": 1000,
                                  "class": "ImageResourceLevel",
                                  "width": 2001,
                                  "url": "media/panorama_520C89FC_5891_ABF8_41C7_2B8DB08869F7.jpeg"
                                 }
                                ]
                               },
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_520C89FC_5891_ABF8_41C7_2B8DB08869F7_t.jpg",
                               "overlays": [
                                {
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_520E8515_5891_9808_41D4_D3A0074DB064, this.camera_4434BDC7_4A9A_779E_41B6_EA5EEB883D65); this.mainPlayList.set('selectedIndex', 8)"
                                  }
                                 ],
                                 "id": "overlay_4C4CE3DD_5897_F838_41C3_DD8FEF3D2EF1",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 7.59,
                                   "yaw": -80.31,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 28,
                                      "class": "ImageResourceLevel",
                                      "width": 32,
                                      "url": "media/panorama_520C89FC_5891_ABF8_41C7_2B8DB08869F7_0_HS_0_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -11.92
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "rollOverDisplay": false,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -80.31,
                                   "hfov": 7.59,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 56,
                                      "class": "ImageResourceLevel",
                                      "width": 64,
                                      "url": "media/panorama_520C89FC_5891_ABF8_41C7_2B8DB08869F7_0_HS_0_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -11.92
                                  }
                                 ]
                                },
                                {
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_520F2EE8_5891_A818_41CA_41495408B95D, this.camera_443FEDC7_4A9A_779E_41B8_10B7B0CC658C); this.mainPlayList.set('selectedIndex', 10)"
                                  }
                                 ],
                                 "id": "overlay_4DB3AD30_5890_A808_41C8_DF2CEE7BBDE5",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 7.43,
                                   "yaw": 99.57,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 28,
                                      "class": "ImageResourceLevel",
                                      "width": 32,
                                      "url": "media/panorama_520C89FC_5891_ABF8_41C7_2B8DB08869F7_0_HS_1_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -16.57
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "rollOverDisplay": false,
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 99.57,
                                   "hfov": 7.43,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 56,
                                      "class": "ImageResourceLevel",
                                      "width": 64,
                                      "url": "media/panorama_520C89FC_5891_ABF8_41C7_2B8DB08869F7_0_HS_1_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -16.57
                                  }
                                 ]
                                },
                                {
                                 "class": "TripodCapPanoramaOverlay",
                                 "id": "panorama_520C89FC_5891_ABF8_41C7_2B8DB08869F7_tcap0",
                                 "angle": 0,
                                 "rotate": true,
                                 "hfov": 26.4,
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "height": 1134,
                                    "class": "ImageResourceLevel",
                                    "width": 1134,
                                    "url": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_tcap0.png"
                                   }
                                  ]
                                 },
                                 "inertia": true
                                }
                               ]
                              }
                             ],
                             "label": "010",
                             "hfovMax": 120,
                             "hfovMin": 60,
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "class": "Panorama",
                                "partial": false,
                                "id": "panorama_520F2EE8_5891_A818_41CA_41495408B95D",
                                "thumbnailUrl": "media/panorama_520F2EE8_5891_A818_41CA_41495408B95D_t.jpg",
                                "pitch": 0,
                                "frames": [
                                 {
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "height": 1500,
                                     "class": "ImageResourceLevel",
                                     "width": 3000,
                                     "url": "media/panorama_520F2EE8_5891_A818_41CA_41495408B95D_hq.jpeg"
                                    },
                                    {
                                     "height": 1000,
                                     "class": "ImageResourceLevel",
                                     "width": 2001,
                                     "url": "media/panorama_520F2EE8_5891_A818_41CA_41495408B95D.jpeg"
                                    }
                                   ]
                                  },
                                  "class": "SphericPanoramaFrame",
                                  "thumbnailUrl": "media/panorama_520F2EE8_5891_A818_41CA_41495408B95D_t.jpg",
                                  "overlays": [
                                   {
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_520C89FC_5891_ABF8_41C7_2B8DB08869F7, this.camera_44D84038_4A9A_6CF2_41CC_5DB587EED083); this.mainPlayList.set('selectedIndex', 9)"
                                     }
                                    ],
                                    "id": "overlay_4D7BDC1D_5891_A838_415B_DE7636B236AE",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 7.47,
                                      "yaw": -98.17,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 28,
                                         "class": "ImageResourceLevel",
                                         "width": 32,
                                         "url": "media/panorama_520F2EE8_5891_A818_41CA_41495408B95D_0_HS_0_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -15.66
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "rollOverDisplay": false,
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": -98.17,
                                      "hfov": 7.47,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 56,
                                         "class": "ImageResourceLevel",
                                         "width": 64,
                                         "url": "media/panorama_520F2EE8_5891_A818_41CA_41495408B95D_0_HS_0_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -15.66
                                     }
                                    ]
                                   },
                                   {
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_5231A3C6_5891_B808_41CC_3E355BFD066F, this.camera_44EE4038_4A9A_6CF2_4195_E2986CB8323D); this.mainPlayList.set('selectedIndex', 11)"
                                     }
                                    ],
                                    "id": "overlay_4FF648AC_5890_A818_41CF_480EAA56228F",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 6.61,
                                      "yaw": -4.11,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 28,
                                         "class": "ImageResourceLevel",
                                         "width": 32,
                                         "url": "media/panorama_520F2EE8_5891_A818_41CA_41495408B95D_0_HS_1_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -31.59
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Image"
                                    },
                                    "rollOverDisplay": false,
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": -4.11,
                                      "hfov": 6.61,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 56,
                                         "class": "ImageResourceLevel",
                                         "width": 64,
                                         "url": "media/panorama_520F2EE8_5891_A818_41CA_41495408B95D_0_HS_1_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -31.59
                                     }
                                    ]
                                   },
                                   {
                                    "class": "TripodCapPanoramaOverlay",
                                    "id": "panorama_520F2EE8_5891_A818_41CA_41495408B95D_tcap0",
                                    "angle": 0,
                                    "rotate": true,
                                    "hfov": 26.4,
                                    "image": {
                                     "class": "ImageResource",
                                     "levels": [
                                      {
                                       "height": 1134,
                                       "class": "ImageResourceLevel",
                                       "width": 1134,
                                       "url": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_tcap0.png"
                                      }
                                     ]
                                    },
                                    "inertia": true
                                   }
                                  ]
                                 }
                                ],
                                "label": "011",
                                "hfovMax": 120,
                                "hfovMin": 60,
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "class": "Panorama",
                                   "partial": false,
                                   "id": "panorama_5231A3C6_5891_B808_41CC_3E355BFD066F",
                                   "thumbnailUrl": "media/panorama_5231A3C6_5891_B808_41CC_3E355BFD066F_t.jpg",
                                   "pitch": 0,
                                   "frames": [
                                    {
                                     "sphere": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "height": 1500,
                                        "class": "ImageResourceLevel",
                                        "width": 3000,
                                        "url": "media/panorama_5231A3C6_5891_B808_41CC_3E355BFD066F_hq.jpeg"
                                       },
                                       {
                                        "height": 1000,
                                        "class": "ImageResourceLevel",
                                        "width": 2001,
                                        "url": "media/panorama_5231A3C6_5891_B808_41CC_3E355BFD066F.jpeg"
                                       }
                                      ]
                                     },
                                     "class": "SphericPanoramaFrame",
                                     "thumbnailUrl": "media/panorama_5231A3C6_5891_B808_41CC_3E355BFD066F_t.jpg",
                                     "overlays": [
                                      {
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_520F2EE8_5891_A818_41CA_41495408B95D, this.camera_44AD5FEA_4A9A_7396_41D1_FE67D70A9341); this.mainPlayList.set('selectedIndex', 10)"
                                        }
                                       ],
                                       "id": "overlay_4EFDD649_5893_9818_4192_5AA3B0D00127",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 8.85,
                                         "yaw": -84.83,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 36,
                                            "class": "ImageResourceLevel",
                                            "width": 42,
                                            "url": "media/panorama_5231A3C6_5891_B808_41CC_3E355BFD066F_0_HS_0_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -28.65
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "data": {
                                        "label": "Image"
                                       },
                                       "rollOverDisplay": false,
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -84.83,
                                         "hfov": 8.85,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 73,
                                            "class": "ImageResourceLevel",
                                            "width": 84,
                                            "url": "media/panorama_5231A3C6_5891_B808_41CC_3E355BFD066F_0_HS_0_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -28.65
                                        }
                                       ]
                                      },
                                      {
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_520A88A0_5891_A808_41D2_B4C366E08A2F, this.camera_44A1AFEA_4A9A_7396_41C7_E9D18EEC4F27); this.mainPlayList.set('selectedIndex', 12)"
                                        }
                                       ],
                                       "id": "overlay_4F1E1EBD_5890_6878_414F_EDE15FB8C0C6",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 6.92,
                                         "yaw": 86.86,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 28,
                                            "class": "ImageResourceLevel",
                                            "width": 32,
                                            "url": "media/panorama_5231A3C6_5891_B808_41CC_3E355BFD066F_0_HS_1_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -26.89
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "data": {
                                        "label": "Image"
                                       },
                                       "rollOverDisplay": false,
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 86.86,
                                         "hfov": 6.92,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 56,
                                            "class": "ImageResourceLevel",
                                            "width": 64,
                                            "url": "media/panorama_5231A3C6_5891_B808_41CC_3E355BFD066F_0_HS_1_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -26.89
                                        }
                                       ]
                                      },
                                      {
                                       "class": "TripodCapPanoramaOverlay",
                                       "id": "panorama_5231A3C6_5891_B808_41CC_3E355BFD066F_tcap0",
                                       "angle": 0,
                                       "rotate": true,
                                       "hfov": 26.4,
                                       "image": {
                                        "class": "ImageResource",
                                        "levels": [
                                         {
                                          "height": 1134,
                                          "class": "ImageResourceLevel",
                                          "width": 1134,
                                          "url": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_tcap0.png"
                                         }
                                        ]
                                       },
                                       "inertia": true
                                      }
                                     ]
                                    }
                                   ],
                                   "label": "012",
                                   "hfovMax": 120,
                                   "hfovMin": 60,
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_520F2EE8_5891_A818_41CA_41495408B95D",
                                     "yaw": -84.83,
                                     "backwardYaw": -4.11,
                                     "distance": 1
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "class": "Panorama",
                                      "partial": false,
                                      "id": "panorama_520A88A0_5891_A808_41D2_B4C366E08A2F",
                                      "thumbnailUrl": "media/panorama_520A88A0_5891_A808_41D2_B4C366E08A2F_t.jpg",
                                      "pitch": 0,
                                      "frames": [
                                       {
                                        "sphere": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "height": 1500,
                                           "class": "ImageResourceLevel",
                                           "width": 3000,
                                           "url": "media/panorama_520A88A0_5891_A808_41D2_B4C366E08A2F_hq.jpeg"
                                          },
                                          {
                                           "height": 1000,
                                           "class": "ImageResourceLevel",
                                           "width": 2001,
                                           "url": "media/panorama_520A88A0_5891_A808_41D2_B4C366E08A2F.jpeg"
                                          }
                                         ]
                                        },
                                        "class": "SphericPanoramaFrame",
                                        "thumbnailUrl": "media/panorama_520A88A0_5891_A808_41D2_B4C366E08A2F_t.jpg",
                                        "overlays": [
                                         {
                                          "enabledInCardboard": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_5231A3C6_5891_B808_41CC_3E355BFD066F, this.camera_47536F9B_4A9A_73B5_41BD_38E30986CF93); this.mainPlayList.set('selectedIndex', 11)"
                                           }
                                          ],
                                          "id": "overlay_4E62C1F9_5890_BBF8_41A1_5BA5522CC10F",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 6.63,
                                            "yaw": -168.16,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 28,
                                               "class": "ImageResourceLevel",
                                               "width": 32,
                                               "url": "media/panorama_520A88A0_5891_A808_41D2_B4C366E08A2F_0_HS_0_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -31.32
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "data": {
                                           "label": "Image"
                                          },
                                          "rollOverDisplay": false,
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -168.16,
                                            "hfov": 6.63,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 56,
                                               "class": "ImageResourceLevel",
                                               "width": 64,
                                               "url": "media/panorama_520A88A0_5891_A808_41D2_B4C366E08A2F_0_HS_0_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -31.32
                                           }
                                          ]
                                         },
                                         {
                                          "enabledInCardboard": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_520BCD87_5891_A808_41C8_1392A181966E, this.camera_47569F9B_4A9A_73B5_41B0_33D0A90430B5); this.mainPlayList.set('selectedIndex', 13)"
                                           }
                                          ],
                                          "id": "overlay_4E6A8045_5891_9808_41C6_04C8DD163375",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 7.44,
                                            "yaw": -87.11,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 28,
                                               "class": "ImageResourceLevel",
                                               "width": 32,
                                               "url": "media/panorama_520A88A0_5891_A808_41D2_B4C366E08A2F_0_HS_1_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -16.45
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "data": {
                                           "label": "Image"
                                          },
                                          "rollOverDisplay": false,
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -87.11,
                                            "hfov": 7.44,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 56,
                                               "class": "ImageResourceLevel",
                                               "width": 64,
                                               "url": "media/panorama_520A88A0_5891_A808_41D2_B4C366E08A2F_0_HS_1_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -16.45
                                           }
                                          ]
                                         },
                                         {
                                          "class": "TripodCapPanoramaOverlay",
                                          "id": "panorama_520A88A0_5891_A808_41D2_B4C366E08A2F_tcap0",
                                          "angle": 0,
                                          "rotate": true,
                                          "hfov": 26.4,
                                          "image": {
                                           "class": "ImageResource",
                                           "levels": [
                                            {
                                             "height": 1134,
                                             "class": "ImageResourceLevel",
                                             "width": 1134,
                                             "url": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_tcap0.png"
                                            }
                                           ]
                                          },
                                          "inertia": true
                                         }
                                        ]
                                       }
                                      ],
                                      "label": "013",
                                      "hfovMax": 120,
                                      "hfovMin": 60,
                                      "adjacentPanoramas": [
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_5231A3C6_5891_B808_41CC_3E355BFD066F",
                                        "yaw": -168.16,
                                        "backwardYaw": 86.86,
                                        "distance": 1
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": {
                                         "class": "Panorama",
                                         "partial": false,
                                         "id": "panorama_520BCD87_5891_A808_41C8_1392A181966E",
                                         "thumbnailUrl": "media/panorama_520BCD87_5891_A808_41C8_1392A181966E_t.jpg",
                                         "pitch": 0,
                                         "frames": [
                                          {
                                           "sphere": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "height": 1500,
                                              "class": "ImageResourceLevel",
                                              "width": 3000,
                                              "url": "media/panorama_520BCD87_5891_A808_41C8_1392A181966E_hq.jpeg"
                                             },
                                             {
                                              "height": 1000,
                                              "class": "ImageResourceLevel",
                                              "width": 2001,
                                              "url": "media/panorama_520BCD87_5891_A808_41C8_1392A181966E.jpeg"
                                             }
                                            ]
                                           },
                                           "class": "SphericPanoramaFrame",
                                           "thumbnailUrl": "media/panorama_520BCD87_5891_A808_41C8_1392A181966E_t.jpg",
                                           "overlays": [
                                            {
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_520A88A0_5891_A808_41D2_B4C366E08A2F, this.camera_45EDCEFF_4A9A_756E_41BD_0A097ED028BB); this.mainPlayList.set('selectedIndex', 12)"
                                              }
                                             ],
                                             "id": "overlay_4082D513_58EF_F808_419F_8B9CBD1215CA",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 7.37,
                                               "yaw": 90.24,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 28,
                                                  "class": "ImageResourceLevel",
                                                  "width": 32,
                                                  "url": "media/panorama_520BCD87_5891_A808_41C8_1392A181966E_0_HS_0_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -18.27
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "data": {
                                              "label": "Image"
                                             },
                                             "rollOverDisplay": false,
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 90.24,
                                               "hfov": 7.37,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 56,
                                                  "class": "ImageResourceLevel",
                                                  "width": 64,
                                                  "url": "media/panorama_520BCD87_5891_A808_41C8_1392A181966E_0_HS_0_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -18.27
                                              }
                                             ]
                                            },
                                            {
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_5234B27E_5891_98F8_41CA_CC93E0498BF0, this.camera_45FE7EFF_4A9A_756E_41B0_1011A89D63F4); this.mainPlayList.set('selectedIndex', 14)"
                                              }
                                             ],
                                             "id": "overlay_4FB6069F_58F0_B838_41C9_814E0086AAE6",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 7.41,
                                               "yaw": -88.19,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 28,
                                                  "class": "ImageResourceLevel",
                                                  "width": 32,
                                                  "url": "media/panorama_520BCD87_5891_A808_41C8_1392A181966E_0_HS_1_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -17.07
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "data": {
                                              "label": "Image"
                                             },
                                             "rollOverDisplay": false,
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": -88.19,
                                               "hfov": 7.41,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 56,
                                                  "class": "ImageResourceLevel",
                                                  "width": 64,
                                                  "url": "media/panorama_520BCD87_5891_A808_41C8_1392A181966E_0_HS_1_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -17.07
                                              }
                                             ]
                                            },
                                            {
                                             "class": "TripodCapPanoramaOverlay",
                                             "id": "panorama_520BCD87_5891_A808_41C8_1392A181966E_tcap0",
                                             "angle": 0,
                                             "rotate": true,
                                             "hfov": 26.4,
                                             "image": {
                                              "class": "ImageResource",
                                              "levels": [
                                               {
                                                "height": 1134,
                                                "class": "ImageResourceLevel",
                                                "width": 1134,
                                                "url": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_tcap0.png"
                                               }
                                              ]
                                             },
                                             "inertia": true
                                            }
                                           ]
                                          }
                                         ],
                                         "label": "014",
                                         "hfovMax": 120,
                                         "hfovMin": 60,
                                         "adjacentPanoramas": [
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": {
                                            "class": "Panorama",
                                            "partial": false,
                                            "id": "panorama_5234B27E_5891_98F8_41CA_CC93E0498BF0",
                                            "thumbnailUrl": "media/panorama_5234B27E_5891_98F8_41CA_CC93E0498BF0_t.jpg",
                                            "pitch": 0,
                                            "frames": [
                                             {
                                              "sphere": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "height": 1500,
                                                 "class": "ImageResourceLevel",
                                                 "width": 3000,
                                                 "url": "media/panorama_5234B27E_5891_98F8_41CA_CC93E0498BF0_hq.jpeg"
                                                },
                                                {
                                                 "height": 1000,
                                                 "class": "ImageResourceLevel",
                                                 "width": 2001,
                                                 "url": "media/panorama_5234B27E_5891_98F8_41CA_CC93E0498BF0.jpeg"
                                                }
                                               ]
                                              },
                                              "class": "SphericPanoramaFrame",
                                              "thumbnailUrl": "media/panorama_5234B27E_5891_98F8_41CA_CC93E0498BF0_t.jpg",
                                              "overlays": [
                                               {
                                                "enabledInCardboard": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_520BCD87_5891_A808_41C8_1392A181966E, this.camera_448F4018_4A9A_6CB3_417B_5C67CF6238C0); this.mainPlayList.set('selectedIndex', 13)"
                                                 }
                                                ],
                                                "id": "overlay_4F730C6E_58F0_6818_41CC_0900172F6067",
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 7.44,
                                                  "yaw": 89.22,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 28,
                                                     "class": "ImageResourceLevel",
                                                     "width": 32,
                                                     "url": "media/panorama_5234B27E_5891_98F8_41CA_CC93E0498BF0_0_HS_0_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -16.53
                                                 }
                                                ],
                                                "useHandCursor": true,
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "rollOverDisplay": false,
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": 89.22,
                                                  "hfov": 7.44,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 56,
                                                     "class": "ImageResourceLevel",
                                                     "width": 64,
                                                     "url": "media/panorama_5234B27E_5891_98F8_41CA_CC93E0498BF0_0_HS_0_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -16.53
                                                 }
                                                ]
                                               },
                                               {
                                                "enabledInCardboard": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_520DF763_5891_9808_41C8_0A525E0D8679, this.camera_44926009_4A9A_6C92_41C5_168E4EF91D25); this.mainPlayList.set('selectedIndex', 15)"
                                                 }
                                                ],
                                                "id": "overlay_4F14B4AB_58F1_9818_41D1_7161538F9F37",
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 7.4,
                                                  "yaw": -90.16,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 28,
                                                     "class": "ImageResourceLevel",
                                                     "width": 32,
                                                     "url": "media/panorama_5234B27E_5891_98F8_41CA_CC93E0498BF0_0_HS_1_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -17.36
                                                 }
                                                ],
                                                "useHandCursor": true,
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "rollOverDisplay": false,
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": -90.16,
                                                  "hfov": 7.4,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 56,
                                                     "class": "ImageResourceLevel",
                                                     "width": 64,
                                                     "url": "media/panorama_5234B27E_5891_98F8_41CA_CC93E0498BF0_0_HS_1_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -17.36
                                                 }
                                                ]
                                               },
                                               {
                                                "class": "TripodCapPanoramaOverlay",
                                                "id": "panorama_5234B27E_5891_98F8_41CA_CC93E0498BF0_tcap0",
                                                "angle": 0,
                                                "rotate": true,
                                                "hfov": 26.4,
                                                "image": {
                                                 "class": "ImageResource",
                                                 "levels": [
                                                  {
                                                   "height": 1134,
                                                   "class": "ImageResourceLevel",
                                                   "width": 1134,
                                                   "url": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_tcap0.png"
                                                  }
                                                 ]
                                                },
                                                "inertia": true
                                               }
                                              ]
                                             }
                                            ],
                                            "label": "015",
                                            "hfovMax": 120,
                                            "hfovMin": 60,
                                            "adjacentPanoramas": [
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": {
                                               "class": "Panorama",
                                               "partial": false,
                                               "id": "panorama_520DF763_5891_9808_41C8_0A525E0D8679",
                                               "thumbnailUrl": "media/panorama_520DF763_5891_9808_41C8_0A525E0D8679_t.jpg",
                                               "pitch": 0,
                                               "frames": [
                                                {
                                                 "sphere": {
                                                  "class": "ImageResource",
                                                  "levels": [
                                                   {
                                                    "height": 1500,
                                                    "class": "ImageResourceLevel",
                                                    "width": 3000,
                                                    "url": "media/panorama_520DF763_5891_9808_41C8_0A525E0D8679_hq.jpeg"
                                                   },
                                                   {
                                                    "height": 1000,
                                                    "class": "ImageResourceLevel",
                                                    "width": 2001,
                                                    "url": "media/panorama_520DF763_5891_9808_41C8_0A525E0D8679.jpeg"
                                                   }
                                                  ]
                                                 },
                                                 "class": "SphericPanoramaFrame",
                                                 "thumbnailUrl": "media/panorama_520DF763_5891_9808_41C8_0A525E0D8679_t.jpg",
                                                 "overlays": [
                                                  {
                                                   "enabledInCardboard": true,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "#FF0000",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_5234B27E_5891_98F8_41CA_CC93E0498BF0, this.camera_47464FBB_4A9A_73F6_41C7_A0DDA735AD10); this.mainPlayList.set('selectedIndex', 14)"
                                                    }
                                                   ],
                                                   "id": "overlay_40A4C922_58F0_A808_41D1_D83C9CAC88E6",
                                                   "maps": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "hfov": 7.5,
                                                     "yaw": 87.01,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 28,
                                                        "class": "ImageResourceLevel",
                                                        "width": 32,
                                                        "url": "media/panorama_520DF763_5891_9808_41C8_0A525E0D8679_0_HS_0_0_0_map.gif"
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -14.64
                                                    }
                                                   ],
                                                   "useHandCursor": true,
                                                   "data": {
                                                    "label": "Image"
                                                   },
                                                   "rollOverDisplay": false,
                                                   "items": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "yaw": 87.01,
                                                     "hfov": 7.5,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 56,
                                                        "class": "ImageResourceLevel",
                                                        "width": 64,
                                                        "url": "media/panorama_520DF763_5891_9808_41C8_0A525E0D8679_0_HS_0_0.png"
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -14.64
                                                    }
                                                   ]
                                                  },
                                                  {
                                                   "enabledInCardboard": true,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "#FF0000",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_52328C53_5890_6808_41C3_A24E1025F9A2, this.camera_44BABFCA_4A9A_7396_41B7_3B0C0B68C588); this.mainPlayList.set('selectedIndex', 16)"
                                                    }
                                                   ],
                                                   "id": "overlay_40AC564F_58F3_F818_41AB_46E54F4D3554",
                                                   "maps": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "hfov": 7.61,
                                                     "yaw": -91.67,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 21,
                                                        "class": "ImageResourceLevel",
                                                        "width": 32,
                                                        "url": "media/panorama_520DF763_5891_9808_41C8_0A525E0D8679_0_HS_1_0_0_map.gif"
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -10.98
                                                    }
                                                   ],
                                                   "useHandCursor": true,
                                                   "data": {
                                                    "label": "Image"
                                                   },
                                                   "rollOverDisplay": false,
                                                   "items": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "yaw": -91.67,
                                                     "hfov": 7.61,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 42,
                                                        "class": "ImageResourceLevel",
                                                        "width": 64,
                                                        "url": "media/panorama_520DF763_5891_9808_41C8_0A525E0D8679_0_HS_1_0.png"
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -10.98
                                                    }
                                                   ]
                                                  },
                                                  {
                                                   "class": "TripodCapPanoramaOverlay",
                                                   "id": "panorama_520DF763_5891_9808_41C8_0A525E0D8679_tcap0",
                                                   "angle": 0,
                                                   "rotate": true,
                                                   "hfov": 26.4,
                                                   "image": {
                                                    "class": "ImageResource",
                                                    "levels": [
                                                     {
                                                      "height": 1134,
                                                      "class": "ImageResourceLevel",
                                                      "width": 1134,
                                                      "url": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_tcap0.png"
                                                     }
                                                    ]
                                                   },
                                                   "inertia": true
                                                  }
                                                 ]
                                                }
                                               ],
                                               "label": "016",
                                               "hfovMax": 120,
                                               "hfovMin": 60,
                                               "adjacentPanoramas": [
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "panorama": "this.panorama_5234B27E_5891_98F8_41CA_CC93E0498BF0",
                                                 "yaw": 87.01,
                                                 "backwardYaw": -90.16,
                                                 "distance": 1
                                                },
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "panorama": {
                                                  "class": "Panorama",
                                                  "partial": false,
                                                  "id": "panorama_52328C53_5890_6808_41C3_A24E1025F9A2",
                                                  "thumbnailUrl": "media/panorama_52328C53_5890_6808_41C3_A24E1025F9A2_t.jpg",
                                                  "pitch": 0,
                                                  "frames": [
                                                   {
                                                    "sphere": {
                                                     "class": "ImageResource",
                                                     "levels": [
                                                      {
                                                       "height": 1500,
                                                       "class": "ImageResourceLevel",
                                                       "width": 3000,
                                                       "url": "media/panorama_52328C53_5890_6808_41C3_A24E1025F9A2_hq.jpeg"
                                                      },
                                                      {
                                                       "height": 1000,
                                                       "class": "ImageResourceLevel",
                                                       "width": 2001,
                                                       "url": "media/panorama_52328C53_5890_6808_41C3_A24E1025F9A2.jpeg"
                                                      }
                                                     ]
                                                    },
                                                    "class": "SphericPanoramaFrame",
                                                    "thumbnailUrl": "media/panorama_52328C53_5890_6808_41C3_A24E1025F9A2_t.jpg",
                                                    "overlays": [
                                                     {
                                                      "enabledInCardboard": true,
                                                      "class": "HotspotPanoramaOverlay",
                                                      "areas": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayArea",
                                                        "mapColor": "#FF0000",
                                                        "click": "this.startPanoramaWithCamera(this.panorama_520DF763_5891_9808_41C8_0A525E0D8679, this.camera_45281F2E_4A9A_74EE_41C5_5C4ED81F35D2); this.mainPlayList.set('selectedIndex', 15)"
                                                       }
                                                      ],
                                                      "id": "overlay_40297F42_58F0_E808_41D5_1D6C96781AD7",
                                                      "maps": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayMap",
                                                        "hfov": 7.66,
                                                        "yaw": -88.29,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "height": 21,
                                                           "class": "ImageResourceLevel",
                                                           "width": 32,
                                                           "url": "media/panorama_52328C53_5890_6808_41C3_A24E1025F9A2_0_HS_0_0_0_map.gif"
                                                          }
                                                         ]
                                                        },
                                                        "pitch": -8.85
                                                       }
                                                      ],
                                                      "useHandCursor": true,
                                                      "data": {
                                                       "label": "Image"
                                                      },
                                                      "rollOverDisplay": false,
                                                      "items": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "yaw": -88.29,
                                                        "hfov": 7.66,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "height": 43,
                                                           "class": "ImageResourceLevel",
                                                           "width": 64,
                                                           "url": "media/panorama_52328C53_5890_6808_41C3_A24E1025F9A2_0_HS_0_0.png"
                                                          }
                                                         ]
                                                        },
                                                        "pitch": -8.85
                                                       }
                                                      ]
                                                     },
                                                     {
                                                      "enabledInCardboard": true,
                                                      "class": "HotspotPanoramaOverlay",
                                                      "areas": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayArea",
                                                        "mapColor": "#FF0000",
                                                        "click": "this.startPanoramaWithCamera(this.panorama_5237913F_5890_7879_41CE_A33E65BA73C9, this.camera_45385F1E_4A9A_74AE_41C5_62F8F80B1E37); this.mainPlayList.set('selectedIndex', 17)"
                                                       }
                                                      ],
                                                      "id": "overlay_41C9E86A_58F1_A818_41C2_3F0EA81CC15B",
                                                      "maps": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayMap",
                                                        "hfov": 7.61,
                                                        "yaw": 84.51,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "height": 21,
                                                           "class": "ImageResourceLevel",
                                                           "width": 32,
                                                           "url": "media/panorama_52328C53_5890_6808_41C3_A24E1025F9A2_0_HS_1_0_0_map.gif"
                                                          }
                                                         ]
                                                        },
                                                        "pitch": -11.06
                                                       }
                                                      ],
                                                      "useHandCursor": true,
                                                      "data": {
                                                       "label": "Image"
                                                      },
                                                      "rollOverDisplay": false,
                                                      "items": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "yaw": 84.51,
                                                        "hfov": 7.61,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "height": 42,
                                                           "class": "ImageResourceLevel",
                                                           "width": 64,
                                                           "url": "media/panorama_52328C53_5890_6808_41C3_A24E1025F9A2_0_HS_1_0.png"
                                                          }
                                                         ]
                                                        },
                                                        "pitch": -11.06
                                                       }
                                                      ]
                                                     },
                                                     {
                                                      "enabledInCardboard": true,
                                                      "class": "HotspotPanoramaOverlay",
                                                      "areas": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayArea",
                                                        "mapColor": "#FF0000",
                                                        "click": "this.startPanoramaWithCamera(this.panorama_523BFF01_5890_A808_41C2_34D07AB0CB8C, this.camera_45260F2E_4A9A_74EE_41D0_7B6C6836DC8F); this.mainPlayList.set('selectedIndex', 23)"
                                                       }
                                                      ],
                                                      "id": "overlay_4535E684_58F0_9808_41C3_C8CF8FA43B2F",
                                                      "maps": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayMap",
                                                        "hfov": 6.88,
                                                        "yaw": -2.49,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "height": 28,
                                                           "class": "ImageResourceLevel",
                                                           "width": 32,
                                                           "url": "media/panorama_52328C53_5890_6808_41C3_A24E1025F9A2_0_HS_2_0_0_map.gif"
                                                          }
                                                         ]
                                                        },
                                                        "pitch": -27.55
                                                       }
                                                      ],
                                                      "useHandCursor": true,
                                                      "data": {
                                                       "label": "Image"
                                                      },
                                                      "rollOverDisplay": false,
                                                      "items": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "yaw": -2.49,
                                                        "hfov": 6.88,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "height": 56,
                                                           "class": "ImageResourceLevel",
                                                           "width": 64,
                                                           "url": "media/panorama_52328C53_5890_6808_41C3_A24E1025F9A2_0_HS_2_0.png"
                                                          }
                                                         ]
                                                        },
                                                        "pitch": -27.55
                                                       }
                                                      ]
                                                     },
                                                     {
                                                      "class": "TripodCapPanoramaOverlay",
                                                      "id": "panorama_52328C53_5890_6808_41C3_A24E1025F9A2_tcap0",
                                                      "angle": 0,
                                                      "rotate": true,
                                                      "hfov": 26.4,
                                                      "image": {
                                                       "class": "ImageResource",
                                                       "levels": [
                                                        {
                                                         "height": 1134,
                                                         "class": "ImageResourceLevel",
                                                         "width": 1134,
                                                         "url": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_tcap0.png"
                                                        }
                                                       ]
                                                      },
                                                      "inertia": true
                                                     }
                                                    ]
                                                   }
                                                  ],
                                                  "label": "017",
                                                  "hfovMax": 120,
                                                  "hfovMin": 60,
                                                  "adjacentPanoramas": [
                                                   {
                                                    "class": "AdjacentPanorama",
                                                    "panorama": {
                                                     "class": "Panorama",
                                                     "partial": false,
                                                     "id": "panorama_5237913F_5890_7879_41CE_A33E65BA73C9",
                                                     "thumbnailUrl": "media/panorama_5237913F_5890_7879_41CE_A33E65BA73C9_t.jpg",
                                                     "pitch": 0,
                                                     "frames": [
                                                      {
                                                       "sphere": {
                                                        "class": "ImageResource",
                                                        "levels": [
                                                         {
                                                          "height": 1500,
                                                          "class": "ImageResourceLevel",
                                                          "width": 3000,
                                                          "url": "media/panorama_5237913F_5890_7879_41CE_A33E65BA73C9_hq.jpeg"
                                                         },
                                                         {
                                                          "height": 1000,
                                                          "class": "ImageResourceLevel",
                                                          "width": 2001,
                                                          "url": "media/panorama_5237913F_5890_7879_41CE_A33E65BA73C9.jpeg"
                                                         }
                                                        ]
                                                       },
                                                       "class": "SphericPanoramaFrame",
                                                       "thumbnailUrl": "media/panorama_5237913F_5890_7879_41CE_A33E65BA73C9_t.jpg",
                                                       "overlays": [
                                                        {
                                                         "enabledInCardboard": true,
                                                         "class": "HotspotPanoramaOverlay",
                                                         "areas": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayArea",
                                                           "mapColor": "#FF0000",
                                                           "click": "this.startPanoramaWithCamera(this.panorama_52328C53_5890_6808_41C3_A24E1025F9A2, this.camera_4468DE34_4A9A_74F2_41C6_E1ACC90E6A74); this.mainPlayList.set('selectedIndex', 16)"
                                                          }
                                                         ],
                                                         "id": "overlay_4163DDAE_58F0_A818_41BB_96E3B84C4B27",
                                                         "maps": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayMap",
                                                           "hfov": 7.33,
                                                           "yaw": 80.15,
                                                           "image": {
                                                            "class": "ImageResource",
                                                            "levels": [
                                                             {
                                                              "height": 28,
                                                              "class": "ImageResourceLevel",
                                                              "width": 32,
                                                              "url": "media/panorama_5237913F_5890_7879_41CE_A33E65BA73C9_0_HS_0_0_0_map.gif"
                                                             }
                                                            ]
                                                           },
                                                           "pitch": -19.08
                                                          }
                                                         ],
                                                         "useHandCursor": true,
                                                         "data": {
                                                          "label": "Image"
                                                         },
                                                         "rollOverDisplay": false,
                                                         "items": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "yaw": 80.15,
                                                           "hfov": 7.33,
                                                           "image": {
                                                            "class": "ImageResource",
                                                            "levels": [
                                                             {
                                                              "height": 56,
                                                              "class": "ImageResourceLevel",
                                                              "width": 64,
                                                              "url": "media/panorama_5237913F_5890_7879_41CE_A33E65BA73C9_0_HS_0_0.png"
                                                             }
                                                            ]
                                                           },
                                                           "pitch": -19.08
                                                          }
                                                         ]
                                                        },
                                                        {
                                                         "enabledInCardboard": true,
                                                         "class": "HotspotPanoramaOverlay",
                                                         "areas": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayArea",
                                                           "mapColor": "#FF0000",
                                                           "click": "this.startPanoramaWithCamera(this.panorama_52255645_5890_7808_41CF_3145DBD20B1C, this.camera_447F7E24_4A9A_7492_419D_7AAED368B686); this.mainPlayList.set('selectedIndex', 18)"
                                                          }
                                                         ],
                                                         "id": "overlay_4166D9DE_58F7_A838_4187_68C98551A204",
                                                         "maps": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayMap",
                                                           "hfov": 7.53,
                                                           "yaw": -95.64,
                                                           "image": {
                                                            "class": "ImageResource",
                                                            "levels": [
                                                             {
                                                              "height": 28,
                                                              "class": "ImageResourceLevel",
                                                              "width": 32,
                                                              "url": "media/panorama_5237913F_5890_7879_41CE_A33E65BA73C9_0_HS_1_0_0_map.gif"
                                                             }
                                                            ]
                                                           },
                                                           "pitch": -13.82
                                                          }
                                                         ],
                                                         "useHandCursor": true,
                                                         "data": {
                                                          "label": "Image"
                                                         },
                                                         "rollOverDisplay": false,
                                                         "items": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "yaw": -95.64,
                                                           "hfov": 7.53,
                                                           "image": {
                                                            "class": "ImageResource",
                                                            "levels": [
                                                             {
                                                              "height": 56,
                                                              "class": "ImageResourceLevel",
                                                              "width": 64,
                                                              "url": "media/panorama_5237913F_5890_7879_41CE_A33E65BA73C9_0_HS_1_0.png"
                                                             }
                                                            ]
                                                           },
                                                           "pitch": -13.82
                                                          }
                                                         ]
                                                        },
                                                        {
                                                         "class": "TripodCapPanoramaOverlay",
                                                         "id": "panorama_5237913F_5890_7879_41CE_A33E65BA73C9_tcap0",
                                                         "angle": 0,
                                                         "rotate": true,
                                                         "hfov": 26.4,
                                                         "image": {
                                                          "class": "ImageResource",
                                                          "levels": [
                                                           {
                                                            "height": 1134,
                                                            "class": "ImageResourceLevel",
                                                            "width": 1134,
                                                            "url": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_tcap0.png"
                                                           }
                                                          ]
                                                         },
                                                         "inertia": true
                                                        }
                                                       ]
                                                      }
                                                     ],
                                                     "label": "018",
                                                     "hfovMax": 120,
                                                     "hfovMin": 60,
                                                     "adjacentPanoramas": [
                                                      {
                                                       "class": "AdjacentPanorama",
                                                       "panorama": {
                                                        "class": "Panorama",
                                                        "partial": false,
                                                        "id": "panorama_52255645_5890_7808_41CF_3145DBD20B1C",
                                                        "thumbnailUrl": "media/panorama_52255645_5890_7808_41CF_3145DBD20B1C_t.jpg",
                                                        "pitch": 0,
                                                        "frames": [
                                                         {
                                                          "sphere": {
                                                           "class": "ImageResource",
                                                           "levels": [
                                                            {
                                                             "height": 1500,
                                                             "class": "ImageResourceLevel",
                                                             "width": 3000,
                                                             "url": "media/panorama_52255645_5890_7808_41CF_3145DBD20B1C_hq.jpeg"
                                                            },
                                                            {
                                                             "height": 1000,
                                                             "class": "ImageResourceLevel",
                                                             "width": 2001,
                                                             "url": "media/panorama_52255645_5890_7808_41CF_3145DBD20B1C.jpeg"
                                                            }
                                                           ]
                                                          },
                                                          "class": "SphericPanoramaFrame",
                                                          "thumbnailUrl": "media/panorama_52255645_5890_7808_41CF_3145DBD20B1C_t.jpg",
                                                          "overlays": [
                                                           {
                                                            "enabledInCardboard": true,
                                                            "class": "HotspotPanoramaOverlay",
                                                            "areas": [
                                                             {
                                                              "class": "HotspotPanoramaOverlayArea",
                                                              "mapColor": "#FF0000",
                                                              "click": "this.startPanoramaWithCamera(this.panorama_5237913F_5890_7879_41CE_A33E65BA73C9, this.camera_474AAFAB_4A9A_7396_41D1_1D343F9C029E); this.mainPlayList.set('selectedIndex', 17)"
                                                             }
                                                            ],
                                                            "id": "overlay_4132707B_58F1_98F8_41C3_549853F40531",
                                                            "maps": [
                                                             {
                                                              "class": "HotspotPanoramaOverlayMap",
                                                              "hfov": 7.52,
                                                              "yaw": 93.75,
                                                              "image": {
                                                               "class": "ImageResource",
                                                               "levels": [
                                                                {
                                                                 "height": 28,
                                                                 "class": "ImageResourceLevel",
                                                                 "width": 32,
                                                                 "url": "media/panorama_52255645_5890_7808_41CF_3145DBD20B1C_0_HS_0_0_0_map.gif"
                                                                }
                                                               ]
                                                              },
                                                              "pitch": -14.32
                                                             }
                                                            ],
                                                            "useHandCursor": true,
                                                            "data": {
                                                             "label": "Image"
                                                            },
                                                            "rollOverDisplay": false,
                                                            "items": [
                                                             {
                                                              "class": "HotspotPanoramaOverlayImage",
                                                              "yaw": 93.75,
                                                              "hfov": 7.52,
                                                              "image": {
                                                               "class": "ImageResource",
                                                               "levels": [
                                                                {
                                                                 "height": 56,
                                                                 "class": "ImageResourceLevel",
                                                                 "width": 64,
                                                                 "url": "media/panorama_52255645_5890_7808_41CF_3145DBD20B1C_0_HS_0_0.png"
                                                                }
                                                               ]
                                                              },
                                                              "pitch": -14.32
                                                             }
                                                            ]
                                                           },
                                                           {
                                                            "enabledInCardboard": true,
                                                            "class": "HotspotPanoramaOverlay",
                                                            "areas": [
                                                             {
                                                              "class": "HotspotPanoramaOverlayArea",
                                                              "mapColor": "#FF0000",
                                                              "click": "this.startPanoramaWithCamera(this.panorama_523D4B18_5890_6838_41A4_7CB434B5030F, this.camera_47408FBB_4A9A_73F6_419C_EA8DBAEB49A1); this.mainPlayList.set('selectedIndex', 19)"
                                                             }
                                                            ],
                                                            "id": "overlay_42852E8B_58F0_6818_41C0_41D9BDEE43C9",
                                                            "maps": [
                                                             {
                                                              "class": "HotspotPanoramaOverlayMap",
                                                              "hfov": 7.53,
                                                              "yaw": -97.57,
                                                              "image": {
                                                               "class": "ImageResource",
                                                               "levels": [
                                                                {
                                                                 "height": 28,
                                                                 "class": "ImageResourceLevel",
                                                                 "width": 32,
                                                                 "url": "media/panorama_52255645_5890_7808_41CF_3145DBD20B1C_0_HS_1_0_0_map.gif"
                                                                }
                                                               ]
                                                              },
                                                              "pitch": -13.86
                                                             }
                                                            ],
                                                            "useHandCursor": true,
                                                            "data": {
                                                             "label": "Image"
                                                            },
                                                            "rollOverDisplay": false,
                                                            "items": [
                                                             {
                                                              "class": "HotspotPanoramaOverlayImage",
                                                              "yaw": -97.57,
                                                              "hfov": 7.53,
                                                              "image": {
                                                               "class": "ImageResource",
                                                               "levels": [
                                                                {
                                                                 "height": 56,
                                                                 "class": "ImageResourceLevel",
                                                                 "width": 64,
                                                                 "url": "media/panorama_52255645_5890_7808_41CF_3145DBD20B1C_0_HS_1_0.png"
                                                                }
                                                               ]
                                                              },
                                                              "pitch": -13.86
                                                             }
                                                            ]
                                                           },
                                                           {
                                                            "class": "TripodCapPanoramaOverlay",
                                                            "id": "panorama_52255645_5890_7808_41CF_3145DBD20B1C_tcap0",
                                                            "angle": 0,
                                                            "rotate": true,
                                                            "hfov": 26.4,
                                                            "image": {
                                                             "class": "ImageResource",
                                                             "levels": [
                                                              {
                                                               "height": 1134,
                                                               "class": "ImageResourceLevel",
                                                               "width": 1134,
                                                               "url": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_tcap0.png"
                                                              }
                                                             ]
                                                            },
                                                            "inertia": true
                                                           }
                                                          ]
                                                         }
                                                        ],
                                                        "label": "019",
                                                        "hfovMax": 120,
                                                        "hfovMin": 60,
                                                        "adjacentPanoramas": [
                                                         {
                                                          "class": "AdjacentPanorama",
                                                          "panorama": "this.panorama_5237913F_5890_7879_41CE_A33E65BA73C9",
                                                          "yaw": 93.75,
                                                          "backwardYaw": -95.64,
                                                          "distance": 1
                                                         },
                                                         {
                                                          "class": "AdjacentPanorama",
                                                          "panorama": {
                                                           "class": "Panorama",
                                                           "partial": false,
                                                           "id": "panorama_523D4B18_5890_6838_41A4_7CB434B5030F",
                                                           "thumbnailUrl": "media/panorama_523D4B18_5890_6838_41A4_7CB434B5030F_t.jpg",
                                                           "pitch": 0,
                                                           "frames": [
                                                            {
                                                             "sphere": {
                                                              "class": "ImageResource",
                                                              "levels": [
                                                               {
                                                                "height": 1500,
                                                                "class": "ImageResourceLevel",
                                                                "width": 3000,
                                                                "url": "media/panorama_523D4B18_5890_6838_41A4_7CB434B5030F_hq.jpeg"
                                                               },
                                                               {
                                                                "height": 1000,
                                                                "class": "ImageResourceLevel",
                                                                "width": 2001,
                                                                "url": "media/panorama_523D4B18_5890_6838_41A4_7CB434B5030F.jpeg"
                                                               }
                                                              ]
                                                             },
                                                             "class": "SphericPanoramaFrame",
                                                             "thumbnailUrl": "media/panorama_523D4B18_5890_6838_41A4_7CB434B5030F_t.jpg",
                                                             "overlays": [
                                                              {
                                                               "enabledInCardboard": true,
                                                               "class": "HotspotPanoramaOverlay",
                                                               "areas": [
                                                                {
                                                                 "class": "HotspotPanoramaOverlayArea",
                                                                 "mapColor": "#FF0000",
                                                                 "click": "this.startPanoramaWithCamera(this.panorama_52255645_5890_7808_41CF_3145DBD20B1C, this.camera_449C3FF9_4A9A_7372_41CC_D8505FE73C76); this.mainPlayList.set('selectedIndex', 18)"
                                                                }
                                                               ],
                                                               "id": "overlay_4212D84A_58F0_A818_41BE_D4E9BF903A9A",
                                                               "maps": [
                                                                {
                                                                 "class": "HotspotPanoramaOverlayMap",
                                                                 "hfov": 7.51,
                                                                 "yaw": 93.97,
                                                                 "image": {
                                                                  "class": "ImageResource",
                                                                  "levels": [
                                                                   {
                                                                    "height": 28,
                                                                    "class": "ImageResourceLevel",
                                                                    "width": 32,
                                                                    "url": "media/panorama_523D4B18_5890_6838_41A4_7CB434B5030F_0_HS_0_0_0_map.gif"
                                                                   }
                                                                  ]
                                                                 },
                                                                 "pitch": -14.5
                                                                }
                                                               ],
                                                               "useHandCursor": true,
                                                               "data": {
                                                                "label": "Image"
                                                               },
                                                               "rollOverDisplay": false,
                                                               "items": [
                                                                {
                                                                 "class": "HotspotPanoramaOverlayImage",
                                                                 "yaw": 93.97,
                                                                 "hfov": 7.51,
                                                                 "image": {
                                                                  "class": "ImageResource",
                                                                  "levels": [
                                                                   {
                                                                    "height": 56,
                                                                    "class": "ImageResourceLevel",
                                                                    "width": 64,
                                                                    "url": "media/panorama_523D4B18_5890_6838_41A4_7CB434B5030F_0_HS_0_0.png"
                                                                   }
                                                                  ]
                                                                 },
                                                                 "pitch": -14.5
                                                                }
                                                               ]
                                                              },
                                                              {
                                                               "enabledInCardboard": true,
                                                               "class": "HotspotPanoramaOverlay",
                                                               "areas": [
                                                                {
                                                                 "class": "HotspotPanoramaOverlayArea",
                                                                 "mapColor": "#FF0000",
                                                                 "click": "this.startPanoramaWithCamera(this.panorama_523EC014_5890_9808_41C6_EEA11BFD7F82, this.camera_44A7CFF9_4A9A_7372_41D1_7CA0EEE903AC); this.mainPlayList.set('selectedIndex', 20)"
                                                                }
                                                               ],
                                                               "id": "overlay_4275BD1C_58F3_E838_41BA_44463ACB9DE1",
                                                               "maps": [
                                                                {
                                                                 "class": "HotspotPanoramaOverlayMap",
                                                                 "hfov": 7.4,
                                                                 "yaw": -86.67,
                                                                 "image": {
                                                                  "class": "ImageResource",
                                                                  "levels": [
                                                                   {
                                                                    "height": 28,
                                                                    "class": "ImageResourceLevel",
                                                                    "width": 32,
                                                                    "url": "media/panorama_523D4B18_5890_6838_41A4_7CB434B5030F_0_HS_1_0_0_map.gif"
                                                                   }
                                                                  ]
                                                                 },
                                                                 "pitch": -17.5
                                                                }
                                                               ],
                                                               "useHandCursor": true,
                                                               "data": {
                                                                "label": "Image"
                                                               },
                                                               "rollOverDisplay": false,
                                                               "items": [
                                                                {
                                                                 "class": "HotspotPanoramaOverlayImage",
                                                                 "yaw": -86.67,
                                                                 "hfov": 7.4,
                                                                 "image": {
                                                                  "class": "ImageResource",
                                                                  "levels": [
                                                                   {
                                                                    "height": 56,
                                                                    "class": "ImageResourceLevel",
                                                                    "width": 64,
                                                                    "url": "media/panorama_523D4B18_5890_6838_41A4_7CB434B5030F_0_HS_1_0.png"
                                                                   }
                                                                  ]
                                                                 },
                                                                 "pitch": -17.5
                                                                }
                                                               ]
                                                              },
                                                              {
                                                               "class": "TripodCapPanoramaOverlay",
                                                               "id": "panorama_523D4B18_5890_6838_41A4_7CB434B5030F_tcap0",
                                                               "angle": 0,
                                                               "rotate": true,
                                                               "hfov": 26.4,
                                                               "image": {
                                                                "class": "ImageResource",
                                                                "levels": [
                                                                 {
                                                                  "height": 1134,
                                                                  "class": "ImageResourceLevel",
                                                                  "width": 1134,
                                                                  "url": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_tcap0.png"
                                                                 }
                                                                ]
                                                               },
                                                               "inertia": true
                                                              }
                                                             ]
                                                            }
                                                           ],
                                                           "label": "020",
                                                           "hfovMax": 120,
                                                           "hfovMin": 60,
                                                           "adjacentPanoramas": [
                                                            {
                                                             "class": "AdjacentPanorama",
                                                             "panorama": {
                                                              "class": "Panorama",
                                                              "partial": false,
                                                              "id": "panorama_523EC014_5890_9808_41C6_EEA11BFD7F82",
                                                              "thumbnailUrl": "media/panorama_523EC014_5890_9808_41C6_EEA11BFD7F82_t.jpg",
                                                              "pitch": 0,
                                                              "frames": [
                                                               {
                                                                "sphere": {
                                                                 "class": "ImageResource",
                                                                 "levels": [
                                                                  {
                                                                   "height": 1500,
                                                                   "class": "ImageResourceLevel",
                                                                   "width": 3000,
                                                                   "url": "media/panorama_523EC014_5890_9808_41C6_EEA11BFD7F82_hq.jpeg"
                                                                  },
                                                                  {
                                                                   "height": 1000,
                                                                   "class": "ImageResourceLevel",
                                                                   "width": 2001,
                                                                   "url": "media/panorama_523EC014_5890_9808_41C6_EEA11BFD7F82.jpeg"
                                                                  }
                                                                 ]
                                                                },
                                                                "class": "SphericPanoramaFrame",
                                                                "thumbnailUrl": "media/panorama_523EC014_5890_9808_41C6_EEA11BFD7F82_t.jpg",
                                                                "overlays": [
                                                                 {
                                                                  "enabledInCardboard": true,
                                                                  "class": "HotspotPanoramaOverlay",
                                                                  "areas": [
                                                                   {
                                                                    "class": "HotspotPanoramaOverlayArea",
                                                                    "mapColor": "#FF0000",
                                                                    "click": "this.startPanoramaWithCamera(this.panorama_523D4B18_5890_6838_41A4_7CB434B5030F, this.camera_44388DB7_4A9A_77FE_41C1_9CC74C6AA91D); this.mainPlayList.set('selectedIndex', 19)"
                                                                   }
                                                                  ],
                                                                  "id": "overlay_4306DE03_58F0_E808_41CB_CDD3ACF39BD4",
                                                                  "maps": [
                                                                   {
                                                                    "class": "HotspotPanoramaOverlayMap",
                                                                    "hfov": 7.37,
                                                                    "yaw": 90.61,
                                                                    "image": {
                                                                     "class": "ImageResource",
                                                                     "levels": [
                                                                      {
                                                                       "height": 28,
                                                                       "class": "ImageResourceLevel",
                                                                       "width": 32,
                                                                       "url": "media/panorama_523EC014_5890_9808_41C6_EEA11BFD7F82_0_HS_0_0_0_map.gif"
                                                                      }
                                                                     ]
                                                                    },
                                                                    "pitch": -18.28
                                                                   }
                                                                  ],
                                                                  "useHandCursor": true,
                                                                  "data": {
                                                                   "label": "Image"
                                                                  },
                                                                  "rollOverDisplay": false,
                                                                  "items": [
                                                                   {
                                                                    "class": "HotspotPanoramaOverlayImage",
                                                                    "yaw": 90.61,
                                                                    "hfov": 7.37,
                                                                    "image": {
                                                                     "class": "ImageResource",
                                                                     "levels": [
                                                                      {
                                                                       "height": 56,
                                                                       "class": "ImageResourceLevel",
                                                                       "width": 64,
                                                                       "url": "media/panorama_523EC014_5890_9808_41C6_EEA11BFD7F82_0_HS_0_0.png"
                                                                      }
                                                                     ]
                                                                    },
                                                                    "pitch": -18.28
                                                                   }
                                                                  ]
                                                                 },
                                                                 {
                                                                  "enabledInCardboard": true,
                                                                  "class": "HotspotPanoramaOverlay",
                                                                  "areas": [
                                                                   {
                                                                    "class": "HotspotPanoramaOverlayArea",
                                                                    "mapColor": "#FF0000",
                                                                    "click": "this.startPanoramaWithCamera(this.panorama_523BD4FB_5890_99F8_41B0_8563A88FC56E, this.camera_44C24DB7_4A9A_77FE_41CE_ED9AB13C98B8); this.mainPlayList.set('selectedIndex', 21)"
                                                                   }
                                                                  ],
                                                                  "id": "overlay_43091CD9_58FF_A838_4154_3F4544F09018",
                                                                  "maps": [
                                                                   {
                                                                    "class": "HotspotPanoramaOverlayMap",
                                                                    "hfov": 7.36,
                                                                    "yaw": -92.69,
                                                                    "image": {
                                                                     "class": "ImageResource",
                                                                     "levels": [
                                                                      {
                                                                       "height": 28,
                                                                       "class": "ImageResourceLevel",
                                                                       "width": 32,
                                                                       "url": "media/panorama_523EC014_5890_9808_41C6_EEA11BFD7F82_0_HS_1_0_0_map.gif"
                                                                      }
                                                                     ]
                                                                    },
                                                                    "pitch": -18.3
                                                                   }
                                                                  ],
                                                                  "useHandCursor": true,
                                                                  "data": {
                                                                   "label": "Image"
                                                                  },
                                                                  "rollOverDisplay": false,
                                                                  "items": [
                                                                   {
                                                                    "class": "HotspotPanoramaOverlayImage",
                                                                    "yaw": -92.69,
                                                                    "hfov": 7.36,
                                                                    "image": {
                                                                     "class": "ImageResource",
                                                                     "levels": [
                                                                      {
                                                                       "height": 56,
                                                                       "class": "ImageResourceLevel",
                                                                       "width": 64,
                                                                       "url": "media/panorama_523EC014_5890_9808_41C6_EEA11BFD7F82_0_HS_1_0.png"
                                                                      }
                                                                     ]
                                                                    },
                                                                    "pitch": -18.3
                                                                   }
                                                                  ]
                                                                 },
                                                                 {
                                                                  "class": "TripodCapPanoramaOverlay",
                                                                  "id": "panorama_523EC014_5890_9808_41C6_EEA11BFD7F82_tcap0",
                                                                  "angle": 0,
                                                                  "rotate": true,
                                                                  "hfov": 26.4,
                                                                  "image": {
                                                                   "class": "ImageResource",
                                                                   "levels": [
                                                                    {
                                                                     "height": 1134,
                                                                     "class": "ImageResourceLevel",
                                                                     "width": 1134,
                                                                     "url": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_tcap0.png"
                                                                    }
                                                                   ]
                                                                  },
                                                                  "inertia": true
                                                                 }
                                                                ]
                                                               }
                                                              ],
                                                              "label": "021",
                                                              "hfovMax": 120,
                                                              "hfovMin": 60,
                                                              "adjacentPanoramas": [
                                                               {
                                                                "class": "AdjacentPanorama",
                                                                "panorama": {
                                                                 "class": "Panorama",
                                                                 "partial": false,
                                                                 "id": "panorama_523BD4FB_5890_99F8_41B0_8563A88FC56E",
                                                                 "thumbnailUrl": "media/panorama_523BD4FB_5890_99F8_41B0_8563A88FC56E_t.jpg",
                                                                 "pitch": 0,
                                                                 "frames": [
                                                                  {
                                                                   "sphere": {
                                                                    "class": "ImageResource",
                                                                    "levels": [
                                                                     {
                                                                      "height": 1500,
                                                                      "class": "ImageResourceLevel",
                                                                      "width": 3000,
                                                                      "url": "media/panorama_523BD4FB_5890_99F8_41B0_8563A88FC56E_hq.jpeg"
                                                                     },
                                                                     {
                                                                      "height": 1000,
                                                                      "class": "ImageResourceLevel",
                                                                      "width": 2001,
                                                                      "url": "media/panorama_523BD4FB_5890_99F8_41B0_8563A88FC56E.jpeg"
                                                                     }
                                                                    ]
                                                                   },
                                                                   "class": "SphericPanoramaFrame",
                                                                   "thumbnailUrl": "media/panorama_523BD4FB_5890_99F8_41B0_8563A88FC56E_t.jpg",
                                                                   "overlays": [
                                                                    {
                                                                     "enabledInCardboard": true,
                                                                     "class": "HotspotPanoramaOverlay",
                                                                     "areas": [
                                                                      {
                                                                       "class": "HotspotPanoramaOverlayArea",
                                                                       "mapColor": "#FF0000",
                                                                       "click": "this.startPanoramaWithCamera(this.panorama_523EC014_5890_9808_41C6_EEA11BFD7F82, this.camera_44183DE6_4A9A_779E_41D0_2DE706F30812); this.mainPlayList.set('selectedIndex', 20)"
                                                                      }
                                                                     ],
                                                                     "id": "overlay_44528668_58F0_7818_41D1_FACF65558440",
                                                                     "maps": [
                                                                      {
                                                                       "class": "HotspotPanoramaOverlayMap",
                                                                       "hfov": 7.53,
                                                                       "yaw": 82.77,
                                                                       "image": {
                                                                        "class": "ImageResource",
                                                                        "levels": [
                                                                         {
                                                                          "height": 19,
                                                                          "class": "ImageResourceLevel",
                                                                          "width": 32,
                                                                          "url": "media/panorama_523BD4FB_5890_99F8_41B0_8563A88FC56E_0_HS_0_0_0_map.gif"
                                                                         }
                                                                        ]
                                                                       },
                                                                       "pitch": -14.02
                                                                      }
                                                                     ],
                                                                     "useHandCursor": true,
                                                                     "data": {
                                                                      "label": "Image"
                                                                     },
                                                                     "rollOverDisplay": false,
                                                                     "items": [
                                                                      {
                                                                       "class": "HotspotPanoramaOverlayImage",
                                                                       "yaw": 82.77,
                                                                       "hfov": 7.53,
                                                                       "image": {
                                                                        "class": "ImageResource",
                                                                        "levels": [
                                                                         {
                                                                          "height": 39,
                                                                          "class": "ImageResourceLevel",
                                                                          "width": 64,
                                                                          "url": "media/panorama_523BD4FB_5890_99F8_41B0_8563A88FC56E_0_HS_0_0.png"
                                                                         }
                                                                        ]
                                                                       },
                                                                       "pitch": -14.02
                                                                      }
                                                                     ]
                                                                    },
                                                                    {
                                                                     "enabledInCardboard": true,
                                                                     "class": "HotspotPanoramaOverlay",
                                                                     "areas": [
                                                                      {
                                                                       "class": "HotspotPanoramaOverlayArea",
                                                                       "mapColor": "#FF0000",
                                                                       "click": "this.startPanoramaWithCamera(this.panorama_523C09FE_5890_ABF8_41C0_8565FDF70075, this.camera_441E0DF5_4A9A_777D_41A3_D793490A49E1); this.mainPlayList.set('selectedIndex', 22)"
                                                                      }
                                                                     ],
                                                                     "id": "overlay_45250EB8_58F3_A878_41D5_2D7090BC6B4E",
                                                                     "maps": [
                                                                      {
                                                                       "class": "HotspotPanoramaOverlayMap",
                                                                       "hfov": 7.44,
                                                                       "yaw": -91.06,
                                                                       "image": {
                                                                        "class": "ImageResource",
                                                                        "levels": [
                                                                         {
                                                                          "height": 28,
                                                                          "class": "ImageResourceLevel",
                                                                          "width": 32,
                                                                          "url": "media/panorama_523BD4FB_5890_99F8_41B0_8563A88FC56E_0_HS_1_0_0_map.gif"
                                                                         }
                                                                        ]
                                                                       },
                                                                       "pitch": -16.49
                                                                      }
                                                                     ],
                                                                     "useHandCursor": true,
                                                                     "data": {
                                                                      "label": "Image"
                                                                     },
                                                                     "rollOverDisplay": false,
                                                                     "items": [
                                                                      {
                                                                       "class": "HotspotPanoramaOverlayImage",
                                                                       "yaw": -91.06,
                                                                       "hfov": 7.44,
                                                                       "image": {
                                                                        "class": "ImageResource",
                                                                        "levels": [
                                                                         {
                                                                          "height": 56,
                                                                          "class": "ImageResourceLevel",
                                                                          "width": 64,
                                                                          "url": "media/panorama_523BD4FB_5890_99F8_41B0_8563A88FC56E_0_HS_1_0.png"
                                                                         }
                                                                        ]
                                                                       },
                                                                       "pitch": -16.49
                                                                      }
                                                                     ]
                                                                    },
                                                                    {
                                                                     "class": "TripodCapPanoramaOverlay",
                                                                     "id": "panorama_523BD4FB_5890_99F8_41B0_8563A88FC56E_tcap0",
                                                                     "angle": 0,
                                                                     "rotate": true,
                                                                     "hfov": 26.4,
                                                                     "image": {
                                                                      "class": "ImageResource",
                                                                      "levels": [
                                                                       {
                                                                        "height": 1134,
                                                                        "class": "ImageResourceLevel",
                                                                        "width": 1134,
                                                                        "url": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_tcap0.png"
                                                                       }
                                                                      ]
                                                                     },
                                                                     "inertia": true
                                                                    }
                                                                   ]
                                                                  }
                                                                 ],
                                                                 "label": "022",
                                                                 "hfovMax": 120,
                                                                 "hfovMin": 60,
                                                                 "adjacentPanoramas": [
                                                                  {
                                                                   "class": "AdjacentPanorama",
                                                                   "panorama": "this.panorama_523EC014_5890_9808_41C6_EEA11BFD7F82",
                                                                   "yaw": 82.77,
                                                                   "backwardYaw": -92.69,
                                                                   "distance": 1
                                                                  },
                                                                  {
                                                                   "class": "AdjacentPanorama",
                                                                   "panorama": {
                                                                    "class": "Panorama",
                                                                    "partial": false,
                                                                    "id": "panorama_523C09FE_5890_ABF8_41C0_8565FDF70075",
                                                                    "thumbnailUrl": "media/panorama_523C09FE_5890_ABF8_41C0_8565FDF70075_t.jpg",
                                                                    "pitch": 0,
                                                                    "frames": [
                                                                     {
                                                                      "sphere": {
                                                                       "class": "ImageResource",
                                                                       "levels": [
                                                                        {
                                                                         "height": 1500,
                                                                         "class": "ImageResourceLevel",
                                                                         "width": 3000,
                                                                         "url": "media/panorama_523C09FE_5890_ABF8_41C0_8565FDF70075_hq.jpeg"
                                                                        },
                                                                        {
                                                                         "height": 1000,
                                                                         "class": "ImageResourceLevel",
                                                                         "width": 2001,
                                                                         "url": "media/panorama_523C09FE_5890_ABF8_41C0_8565FDF70075.jpeg"
                                                                        }
                                                                       ]
                                                                      },
                                                                      "class": "SphericPanoramaFrame",
                                                                      "thumbnailUrl": "media/panorama_523C09FE_5890_ABF8_41C0_8565FDF70075_t.jpg",
                                                                      "overlays": [
                                                                       {
                                                                        "enabledInCardboard": true,
                                                                        "class": "HotspotPanoramaOverlay",
                                                                        "areas": [
                                                                         {
                                                                          "class": "HotspotPanoramaOverlayArea",
                                                                          "mapColor": "#FF0000",
                                                                          "click": "this.startPanoramaWithCamera(this.panorama_538BD9DA_5891_A838_41CF_69237A394718, this.camera_45BABE92_4A9A_75B6_41B3_E581D822C4B7); this.mainPlayList.set('selectedIndex', 0)"
                                                                         }
                                                                        ],
                                                                        "id": "overlay_5653C933_58B0_680D_41CF_62B93239710D",
                                                                        "maps": [
                                                                         {
                                                                          "class": "HotspotPanoramaOverlayMap",
                                                                          "hfov": 9.5,
                                                                          "yaw": -179.58,
                                                                          "image": {
                                                                           "class": "ImageResource",
                                                                           "levels": [
                                                                            {
                                                                             "height": 36,
                                                                             "class": "ImageResourceLevel",
                                                                             "width": 42,
                                                                             "url": "media/panorama_523C09FE_5890_ABF8_41C0_8565FDF70075_0_HS_0_0_0_map.gif"
                                                                            }
                                                                           ]
                                                                          },
                                                                          "pitch": -19.6
                                                                         }
                                                                        ],
                                                                        "useHandCursor": true,
                                                                        "data": {
                                                                         "label": "Image"
                                                                        },
                                                                        "rollOverDisplay": false,
                                                                        "items": [
                                                                         {
                                                                          "class": "HotspotPanoramaOverlayImage",
                                                                          "yaw": -179.58,
                                                                          "hfov": 9.5,
                                                                          "image": {
                                                                           "class": "ImageResource",
                                                                           "levels": [
                                                                            {
                                                                             "height": 73,
                                                                             "class": "ImageResourceLevel",
                                                                             "width": 84,
                                                                             "url": "media/panorama_523C09FE_5890_ABF8_41C0_8565FDF70075_0_HS_0_0.png"
                                                                            }
                                                                           ]
                                                                          },
                                                                          "pitch": -19.6
                                                                         }
                                                                        ]
                                                                       },
                                                                       {
                                                                        "enabledInCardboard": true,
                                                                        "class": "HotspotPanoramaOverlay",
                                                                        "areas": [
                                                                         {
                                                                          "class": "HotspotPanoramaOverlayArea",
                                                                          "mapColor": "#FF0000",
                                                                          "click": "this.startPanoramaWithCamera(this.panorama_523BD4FB_5890_99F8_41B0_8563A88FC56E, this.camera_444FBE72_4A9A_7577_41C6_4B750CFF224B); this.mainPlayList.set('selectedIndex', 21)"
                                                                         }
                                                                        ],
                                                                        "id": "overlay_44308C5D_58F0_6838_41C6_231306C050B5",
                                                                        "maps": [
                                                                         {
                                                                          "class": "HotspotPanoramaOverlayMap",
                                                                          "hfov": 7.47,
                                                                          "yaw": 101.18,
                                                                          "image": {
                                                                           "class": "ImageResource",
                                                                           "levels": [
                                                                            {
                                                                             "height": 28,
                                                                             "class": "ImageResourceLevel",
                                                                             "width": 32,
                                                                             "url": "media/panorama_523C09FE_5890_ABF8_41C0_8565FDF70075_0_HS_1_0_0_map.gif"
                                                                            }
                                                                           ]
                                                                          },
                                                                          "pitch": -15.49
                                                                         }
                                                                        ],
                                                                        "useHandCursor": true,
                                                                        "data": {
                                                                         "label": "Image"
                                                                        },
                                                                        "rollOverDisplay": false,
                                                                        "items": [
                                                                         {
                                                                          "class": "HotspotPanoramaOverlayImage",
                                                                          "yaw": 101.18,
                                                                          "hfov": 7.47,
                                                                          "image": {
                                                                           "class": "ImageResource",
                                                                           "levels": [
                                                                            {
                                                                             "height": 56,
                                                                             "class": "ImageResourceLevel",
                                                                             "width": 64,
                                                                             "url": "media/panorama_523C09FE_5890_ABF8_41C0_8565FDF70075_0_HS_1_0.png"
                                                                            }
                                                                           ]
                                                                          },
                                                                          "pitch": -15.49
                                                                         }
                                                                        ]
                                                                       },
                                                                       {
                                                                        "class": "TripodCapPanoramaOverlay",
                                                                        "id": "panorama_523C09FE_5890_ABF8_41C0_8565FDF70075_tcap0",
                                                                        "angle": 0,
                                                                        "rotate": true,
                                                                        "hfov": 26.4,
                                                                        "image": {
                                                                         "class": "ImageResource",
                                                                         "levels": [
                                                                          {
                                                                           "height": 1134,
                                                                           "class": "ImageResourceLevel",
                                                                           "width": 1134,
                                                                           "url": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_tcap0.png"
                                                                          }
                                                                         ]
                                                                        },
                                                                        "inertia": true
                                                                       }
                                                                      ]
                                                                     }
                                                                    ],
                                                                    "label": "023",
                                                                    "hfovMax": 120,
                                                                    "hfovMin": 60,
                                                                    "adjacentPanoramas": [
                                                                     {
                                                                      "class": "AdjacentPanorama",
                                                                      "panorama": "this.panorama_523BD4FB_5890_99F8_41B0_8563A88FC56E",
                                                                      "yaw": 101.18,
                                                                      "backwardYaw": -91.06,
                                                                      "distance": 1
                                                                     },
                                                                     {
                                                                      "class": "AdjacentPanorama",
                                                                      "panorama": "this.panorama_538BD9DA_5891_A838_41CF_69237A394718",
                                                                      "yaw": -179.58,
                                                                      "backwardYaw": -179.66,
                                                                      "distance": 1
                                                                     }
                                                                    ],
                                                                    "hfov": 360,
                                                                    "vfov": 180
                                                                   },
                                                                   "yaw": -91.06,
                                                                   "backwardYaw": 101.18,
                                                                   "distance": 1
                                                                  }
                                                                 ],
                                                                 "hfov": 360,
                                                                 "vfov": 180
                                                                },
                                                                "yaw": -92.69,
                                                                "backwardYaw": 82.77,
                                                                "distance": 1
                                                               },
                                                               {
                                                                "class": "AdjacentPanorama",
                                                                "panorama": "this.panorama_523D4B18_5890_6838_41A4_7CB434B5030F",
                                                                "yaw": 90.61,
                                                                "backwardYaw": -86.67,
                                                                "distance": 1
                                                               }
                                                              ],
                                                              "hfov": 360,
                                                              "vfov": 180
                                                             },
                                                             "yaw": -86.67,
                                                             "backwardYaw": 90.61,
                                                             "distance": 1
                                                            },
                                                            {
                                                             "class": "AdjacentPanorama",
                                                             "panorama": "this.panorama_52255645_5890_7808_41CF_3145DBD20B1C",
                                                             "yaw": 93.97,
                                                             "backwardYaw": -97.57,
                                                             "distance": 1
                                                            }
                                                           ],
                                                           "hfov": 360,
                                                           "vfov": 180
                                                          },
                                                          "yaw": -97.57,
                                                          "backwardYaw": 93.97,
                                                          "distance": 1
                                                         }
                                                        ],
                                                        "hfov": 360,
                                                        "vfov": 180
                                                       },
                                                       "yaw": -95.64,
                                                       "backwardYaw": 93.75,
                                                       "distance": 1
                                                      },
                                                      {
                                                       "class": "AdjacentPanorama",
                                                       "panorama": "this.panorama_52328C53_5890_6808_41C3_A24E1025F9A2",
                                                       "yaw": 80.15,
                                                       "backwardYaw": 84.51,
                                                       "distance": 1
                                                      }
                                                     ],
                                                     "hfov": 360,
                                                     "vfov": 180
                                                    },
                                                    "yaw": 84.51,
                                                    "backwardYaw": 80.15,
                                                    "distance": 1
                                                   },
                                                   {
                                                    "class": "AdjacentPanorama",
                                                    "panorama": "this.panorama_520DF763_5891_9808_41C8_0A525E0D8679",
                                                    "yaw": -88.29,
                                                    "backwardYaw": -91.67,
                                                    "distance": 1
                                                   },
                                                   {
                                                    "class": "AdjacentPanorama",
                                                    "panorama": {
                                                     "class": "Panorama",
                                                     "partial": false,
                                                     "id": "panorama_523BFF01_5890_A808_41C2_34D07AB0CB8C",
                                                     "thumbnailUrl": "media/panorama_523BFF01_5890_A808_41C2_34D07AB0CB8C_t.jpg",
                                                     "pitch": 0,
                                                     "frames": [
                                                      {
                                                       "sphere": {
                                                        "class": "ImageResource",
                                                        "levels": [
                                                         {
                                                          "height": 1500,
                                                          "class": "ImageResourceLevel",
                                                          "width": 3000,
                                                          "url": "media/panorama_523BFF01_5890_A808_41C2_34D07AB0CB8C_hq.jpeg"
                                                         },
                                                         {
                                                          "height": 1000,
                                                          "class": "ImageResourceLevel",
                                                          "width": 2001,
                                                          "url": "media/panorama_523BFF01_5890_A808_41C2_34D07AB0CB8C.jpeg"
                                                         }
                                                        ]
                                                       },
                                                       "class": "SphericPanoramaFrame",
                                                       "thumbnailUrl": "media/panorama_523BFF01_5890_A808_41C2_34D07AB0CB8C_t.jpg",
                                                       "overlays": [
                                                        {
                                                         "enabledInCardboard": true,
                                                         "class": "HotspotPanoramaOverlay",
                                                         "areas": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayArea",
                                                           "mapColor": "#FF0000",
                                                           "click": "this.startPanoramaWithCamera(this.panorama_52397B1E_5891_E838_41B3_D86C1767CABA, this.camera_45931ED0_4A9A_75B2_41C8_D99C27F26015); this.mainPlayList.set('selectedIndex', 6)"
                                                          }
                                                         ],
                                                         "id": "overlay_46948401_58F0_9808_41B9_96C08093994A",
                                                         "maps": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayMap",
                                                           "hfov": 6.62,
                                                           "yaw": -2.06,
                                                           "image": {
                                                            "class": "ImageResource",
                                                            "levels": [
                                                             {
                                                              "height": 28,
                                                              "class": "ImageResourceLevel",
                                                              "width": 32,
                                                              "url": "media/panorama_523BFF01_5890_A808_41C2_34D07AB0CB8C_0_HS_0_0_0_map.gif"
                                                             }
                                                            ]
                                                           },
                                                           "pitch": -31.36
                                                          }
                                                         ],
                                                         "useHandCursor": true,
                                                         "data": {
                                                          "label": "Image"
                                                         },
                                                         "rollOverDisplay": false,
                                                         "items": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "yaw": -2.06,
                                                           "hfov": 6.62,
                                                           "image": {
                                                            "class": "ImageResource",
                                                            "levels": [
                                                             {
                                                              "height": 56,
                                                              "class": "ImageResourceLevel",
                                                              "width": 64,
                                                              "url": "media/panorama_523BFF01_5890_A808_41C2_34D07AB0CB8C_0_HS_0_0.png"
                                                             }
                                                            ]
                                                           },
                                                           "pitch": -31.36
                                                          }
                                                         ]
                                                        },
                                                        {
                                                         "enabledInCardboard": true,
                                                         "class": "HotspotPanoramaOverlay",
                                                         "areas": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayArea",
                                                           "mapColor": "#FF0000",
                                                           "click": "this.startPanoramaWithCamera(this.panorama_52328C53_5890_6808_41C3_A24E1025F9A2, this.camera_4581FEEF_4A9A_756D_41B2_E9DC38FDCA2E); this.mainPlayList.set('selectedIndex', 16)"
                                                          }
                                                         ],
                                                         "id": "overlay_469B688B_58F0_6818_41D2_BECD573872B7",
                                                         "maps": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayMap",
                                                           "hfov": 6.89,
                                                           "yaw": -179.88,
                                                           "image": {
                                                            "class": "ImageResource",
                                                            "levels": [
                                                             {
                                                              "height": 28,
                                                              "class": "ImageResourceLevel",
                                                              "width": 32,
                                                              "url": "media/panorama_523BFF01_5890_A808_41C2_34D07AB0CB8C_0_HS_1_0_0_map.gif"
                                                             }
                                                            ]
                                                           },
                                                           "pitch": -27.38
                                                          }
                                                         ],
                                                         "useHandCursor": true,
                                                         "data": {
                                                          "label": "Image"
                                                         },
                                                         "rollOverDisplay": false,
                                                         "items": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "yaw": -179.88,
                                                           "hfov": 6.89,
                                                           "image": {
                                                            "class": "ImageResource",
                                                            "levels": [
                                                             {
                                                              "height": 56,
                                                              "class": "ImageResourceLevel",
                                                              "width": 64,
                                                              "url": "media/panorama_523BFF01_5890_A808_41C2_34D07AB0CB8C_0_HS_1_0.png"
                                                             }
                                                            ]
                                                           },
                                                           "pitch": -27.38
                                                          }
                                                         ]
                                                        },
                                                        {
                                                         "class": "TripodCapPanoramaOverlay",
                                                         "id": "panorama_523BFF01_5890_A808_41C2_34D07AB0CB8C_tcap0",
                                                         "angle": 0,
                                                         "rotate": true,
                                                         "hfov": 26.4,
                                                         "image": {
                                                          "class": "ImageResource",
                                                          "levels": [
                                                           {
                                                            "height": 1134,
                                                            "class": "ImageResourceLevel",
                                                            "width": 1134,
                                                            "url": "media/panorama_538BD9DA_5891_A838_41CF_69237A394718_tcap0.png"
                                                           }
                                                          ]
                                                         },
                                                         "inertia": true
                                                        }
                                                       ]
                                                      }
                                                     ],
                                                     "label": "024",
                                                     "hfovMax": 120,
                                                     "hfovMin": 60,
                                                     "adjacentPanoramas": [
                                                      {
                                                       "class": "AdjacentPanorama",
                                                       "panorama": "this.panorama_52397B1E_5891_E838_41B3_D86C1767CABA",
                                                       "yaw": -2.06,
                                                       "backwardYaw": -179.85,
                                                       "distance": 1
                                                      },
                                                      {
                                                       "class": "AdjacentPanorama",
                                                       "panorama": "this.panorama_52328C53_5890_6808_41C3_A24E1025F9A2",
                                                       "yaw": -179.88,
                                                       "backwardYaw": -2.49,
                                                       "distance": 1
                                                      }
                                                     ],
                                                     "hfov": 360,
                                                     "vfov": 180
                                                    },
                                                    "yaw": -2.49,
                                                    "backwardYaw": -179.88,
                                                    "distance": 1
                                                   }
                                                  ],
                                                  "hfov": 360,
                                                  "vfov": 180
                                                 },
                                                 "yaw": -91.67,
                                                 "backwardYaw": -88.29,
                                                 "distance": 1
                                                }
                                               ],
                                               "hfov": 360,
                                               "vfov": 180
                                              },
                                              "yaw": -90.16,
                                              "backwardYaw": 87.01,
                                              "distance": 1
                                             },
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_520BCD87_5891_A808_41C8_1392A181966E",
                                              "yaw": 89.22,
                                              "backwardYaw": -88.19,
                                              "distance": 1
                                             }
                                            ],
                                            "hfov": 360,
                                            "vfov": 180
                                           },
                                           "yaw": -88.19,
                                           "backwardYaw": 89.22,
                                           "distance": 1
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_520A88A0_5891_A808_41D2_B4C366E08A2F",
                                           "yaw": 90.24,
                                           "backwardYaw": -87.11,
                                           "distance": 1
                                          }
                                         ],
                                         "hfov": 360,
                                         "vfov": 180
                                        },
                                        "yaw": -87.11,
                                        "backwardYaw": 90.24,
                                        "distance": 1
                                       }
                                      ],
                                      "hfov": 360,
                                      "vfov": 180
                                     },
                                     "yaw": 86.86,
                                     "backwardYaw": -168.16,
                                     "distance": 1
                                    }
                                   ],
                                   "hfov": 360,
                                   "vfov": 180
                                  },
                                  "yaw": -4.11,
                                  "backwardYaw": -84.83,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_520C89FC_5891_ABF8_41C7_2B8DB08869F7",
                                  "yaw": -98.17,
                                  "backwardYaw": 99.57,
                                  "distance": 1
                                 }
                                ],
                                "hfov": 360,
                                "vfov": 180
                               },
                               "yaw": 99.57,
                               "backwardYaw": -98.17,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_520E8515_5891_9808_41D4_D3A0074DB064",
                               "yaw": -80.31,
                               "backwardYaw": 90.55,
                               "distance": 1
                              }
                             ],
                             "hfov": 360,
                             "vfov": 180
                            },
                            "yaw": 90.55,
                            "backwardYaw": -80.31,
                            "distance": 1
                           }
                          ],
                          "hfov": 360,
                          "vfov": 180
                         },
                         "yaw": 88.02,
                         "backwardYaw": -89.45,
                         "distance": 1
                        }
                       ],
                       "hfov": 360,
                       "vfov": 180
                      },
                      "yaw": -92.1,
                      "backwardYaw": -92.15,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_523E161D_5891_F838_41B8_718A76891998",
                      "yaw": 86.68,
                      "backwardYaw": -90.72,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_523BFF01_5890_A808_41C2_34D07AB0CB8C",
                      "yaw": -179.85,
                      "backwardYaw": -2.06,
                      "distance": 1
                     }
                    ],
                    "hfov": 360,
                    "vfov": 180
                   },
                   "yaw": -90.72,
                   "backwardYaw": 86.68,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_5238A09D_5891_F838_41D3_B0C187F9890E",
                   "yaw": 90.42,
                   "backwardYaw": -90.77,
                   "distance": 1
                  }
                 ],
                 "hfov": 360,
                 "vfov": 180
                },
                "yaw": -90.77,
                "backwardYaw": 90.42,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_523C1B0D_5891_E818_41CD_A6BF6C6AB1C8",
                "yaw": 88.55,
                "backwardYaw": -89.96,
                "distance": 1
               }
              ],
              "hfov": 360,
              "vfov": 180
             },
             "yaw": -89.96,
             "backwardYaw": 88.55,
             "distance": 1
            }
           ],
           "hfov": 360,
           "vfov": 180
          },
          "yaw": -88.19,
          "backwardYaw": 89.46,
          "distance": 1
         }
        ],
        "hfov": 360,
        "vfov": 180
       },
       "yaw": -89,
       "backwardYaw": 90.43,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_538BD9DA_5891_A838_41CF_69237A394718",
       "yaw": 89.07,
       "backwardYaw": -80.57,
       "distance": 1
      }
     ],
     "hfov": 360,
     "vfov": 180
    },
    "yaw": -80.57,
    "backwardYaw": 89.07,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_523C09FE_5890_ABF8_41C0_8565FDF70075",
    "yaw": -179.66,
    "backwardYaw": -179.58,
    "distance": 1
   }
  ],
  "hfov": 360,
  "vfov": 180
 },
 {
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_538BD9DA_5891_A838_41CF_69237A394718_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -82.86,
   "pitch": -8.58
  }
 },
 "this.panorama_52605FD4_5891_A808_41B9_7F3362CF34FE",
 {
  "class": "PanoramaCamera",
  "id": "panorama_52605FD4_5891_A808_41B9_7F3362CF34FE_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_523BB595_5891_9808_41D2_C0E662D7BB96",
 {
  "class": "PanoramaCamera",
  "id": "panorama_523BB595_5891_9808_41D2_C0E662D7BB96_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_523C1B0D_5891_E818_41CD_A6BF6C6AB1C8",
 {
  "class": "PanoramaCamera",
  "id": "panorama_523C1B0D_5891_E818_41CD_A6BF6C6AB1C8_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_5238A09D_5891_F838_41D3_B0C187F9890E",
 {
  "class": "PanoramaCamera",
  "id": "panorama_5238A09D_5891_F838_41D3_B0C187F9890E_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_523E161D_5891_F838_41B8_718A76891998",
 {
  "class": "PanoramaCamera",
  "id": "panorama_523E161D_5891_F838_41B8_718A76891998_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_52397B1E_5891_E838_41B3_D86C1767CABA",
 {
  "class": "PanoramaCamera",
  "id": "panorama_52397B1E_5891_E838_41B3_D86C1767CABA_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_523F1006_5891_9808_41D5_D33CC8A08930",
 {
  "class": "PanoramaCamera",
  "id": "panorama_523F1006_5891_9808_41D5_D33CC8A08930_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_520E8515_5891_9808_41D4_D3A0074DB064",
 {
  "class": "PanoramaCamera",
  "id": "panorama_520E8515_5891_9808_41D4_D3A0074DB064_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_520C89FC_5891_ABF8_41C7_2B8DB08869F7",
 {
  "class": "PanoramaCamera",
  "id": "panorama_520C89FC_5891_ABF8_41C7_2B8DB08869F7_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_520F2EE8_5891_A818_41CA_41495408B95D",
 {
  "class": "PanoramaCamera",
  "id": "panorama_520F2EE8_5891_A818_41CA_41495408B95D_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_5231A3C6_5891_B808_41CC_3E355BFD066F",
 {
  "class": "PanoramaCamera",
  "id": "panorama_5231A3C6_5891_B808_41CC_3E355BFD066F_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_520A88A0_5891_A808_41D2_B4C366E08A2F",
 {
  "class": "PanoramaCamera",
  "id": "panorama_520A88A0_5891_A808_41D2_B4C366E08A2F_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_520BCD87_5891_A808_41C8_1392A181966E",
 {
  "class": "PanoramaCamera",
  "id": "panorama_520BCD87_5891_A808_41C8_1392A181966E_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_5234B27E_5891_98F8_41CA_CC93E0498BF0",
 {
  "class": "PanoramaCamera",
  "id": "panorama_5234B27E_5891_98F8_41CA_CC93E0498BF0_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_520DF763_5891_9808_41C8_0A525E0D8679",
 {
  "class": "PanoramaCamera",
  "id": "panorama_520DF763_5891_9808_41C8_0A525E0D8679_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_52328C53_5890_6808_41C3_A24E1025F9A2",
 {
  "class": "PanoramaCamera",
  "id": "panorama_52328C53_5890_6808_41C3_A24E1025F9A2_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_5237913F_5890_7879_41CE_A33E65BA73C9",
 {
  "class": "PanoramaCamera",
  "id": "panorama_5237913F_5890_7879_41CE_A33E65BA73C9_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_52255645_5890_7808_41CF_3145DBD20B1C",
 {
  "class": "PanoramaCamera",
  "id": "panorama_52255645_5890_7808_41CF_3145DBD20B1C_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_523D4B18_5890_6838_41A4_7CB434B5030F",
 {
  "class": "PanoramaCamera",
  "id": "panorama_523D4B18_5890_6838_41A4_7CB434B5030F_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_523EC014_5890_9808_41C6_EEA11BFD7F82",
 {
  "class": "PanoramaCamera",
  "id": "panorama_523EC014_5890_9808_41C6_EEA11BFD7F82_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_523BD4FB_5890_99F8_41B0_8563A88FC56E",
 {
  "class": "PanoramaCamera",
  "id": "panorama_523BD4FB_5890_99F8_41B0_8563A88FC56E_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_523C09FE_5890_ABF8_41C0_8565FDF70075",
 {
  "class": "PanoramaCamera",
  "id": "panorama_523C09FE_5890_ABF8_41C0_8565FDF70075_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_523BFF01_5890_A808_41C2_34D07AB0CB8C",
 {
  "class": "PanoramaCamera",
  "id": "panorama_523BFF01_5890_A808_41C2_34D07AB0CB8C_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_538BD9DA_5891_A838_41CF_69237A394718",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_538BD9DA_5891_A838_41CF_69237A394718_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_52605FD4_5891_A808_41B9_7F3362CF34FE",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_52605FD4_5891_A808_41B9_7F3362CF34FE_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_523BB595_5891_9808_41D2_C0E662D7BB96",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_523BB595_5891_9808_41D2_C0E662D7BB96_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_523C1B0D_5891_E818_41CD_A6BF6C6AB1C8",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_523C1B0D_5891_E818_41CD_A6BF6C6AB1C8_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_5238A09D_5891_F838_41D3_B0C187F9890E",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5238A09D_5891_F838_41D3_B0C187F9890E_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_523E161D_5891_F838_41B8_718A76891998",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_523E161D_5891_F838_41B8_718A76891998_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_52397B1E_5891_E838_41B3_D86C1767CABA",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_52397B1E_5891_E838_41B3_D86C1767CABA_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_523F1006_5891_9808_41D5_D33CC8A08930",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_523F1006_5891_9808_41D5_D33CC8A08930_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_520E8515_5891_9808_41D4_D3A0074DB064",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_520E8515_5891_9808_41D4_D3A0074DB064_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_520C89FC_5891_ABF8_41C7_2B8DB08869F7",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_520C89FC_5891_ABF8_41C7_2B8DB08869F7_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "media": "this.panorama_520F2EE8_5891_A818_41CA_41495408B95D",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_520F2EE8_5891_A818_41CA_41495408B95D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "media": "this.panorama_5231A3C6_5891_B808_41CC_3E355BFD066F",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5231A3C6_5891_B808_41CC_3E355BFD066F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "media": "this.panorama_520A88A0_5891_A808_41D2_B4C366E08A2F",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_520A88A0_5891_A808_41D2_B4C366E08A2F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "media": "this.panorama_520BCD87_5891_A808_41C8_1392A181966E",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_520BCD87_5891_A808_41C8_1392A181966E_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "media": "this.panorama_5234B27E_5891_98F8_41CA_CC93E0498BF0",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5234B27E_5891_98F8_41CA_CC93E0498BF0_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "media": "this.panorama_520DF763_5891_9808_41C8_0A525E0D8679",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_520DF763_5891_9808_41C8_0A525E0D8679_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "media": "this.panorama_52328C53_5890_6808_41C3_A24E1025F9A2",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_52328C53_5890_6808_41C3_A24E1025F9A2_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "media": "this.panorama_5237913F_5890_7879_41CE_A33E65BA73C9",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5237913F_5890_7879_41CE_A33E65BA73C9_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "media": "this.panorama_52255645_5890_7808_41CF_3145DBD20B1C",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_52255645_5890_7808_41CF_3145DBD20B1C_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "media": "this.panorama_523D4B18_5890_6838_41A4_7CB434B5030F",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_523D4B18_5890_6838_41A4_7CB434B5030F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "media": "this.panorama_523EC014_5890_9808_41C6_EEA11BFD7F82",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_523EC014_5890_9808_41C6_EEA11BFD7F82_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "media": "this.panorama_523BD4FB_5890_99F8_41B0_8563A88FC56E",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_523BD4FB_5890_99F8_41B0_8563A88FC56E_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
    "media": "this.panorama_523C09FE_5890_ABF8_41C0_8565FDF70075",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_523C09FE_5890_ABF8_41C0_8565FDF70075_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_523BFF01_5890_A808_41C2_34D07AB0CB8C",
    "camera": "this.panorama_523BFF01_5890_A808_41C2_34D07AB0CB8C_camera",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 0)"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_44C24DB7_4A9A_77FE_41CE_ED9AB13C98B8",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -97.23,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_44388DB7_4A9A_77FE_41C1_9CC74C6AA91D",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 93.33,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_443FEDC7_4A9A_779E_41B8_10B7B0CC658C",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 81.83,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_4434BDC7_4A9A_779E_41B6_EA5EEB883D65",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -89.45,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_442A2DD6_4A9A_77BE_41BE_00294D9EAA82",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 91,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_44234DD6_4A9A_77BE_41B3_26D130620635",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -90.54,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_44183DE6_4A9A_779E_41D0_2DE706F30812",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 87.31,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_441E0DF5_4A9A_777D_41A3_D793490A49E1",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -78.82,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_44165DF5_4A9A_777D_41BC_494DE7DE5F67",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -90.93,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_44006E05_4A9A_7492_41C0_F83C35F3F2F7",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.42,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_447F7E24_4A9A_7492_419D_7AAED368B686",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -86.25,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_4468DE34_4A9A_74F2_41C6_E1ACC90E6A74",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -95.49,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_4467BE53_4A9A_74B6_4162_1321650A5FA2",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -89.57,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_4452AE63_4A9A_7496_41D2_93EB4B1722F6",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 99.43,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_444FBE72_4A9A_7577_41C6_4B750CFF224B",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 88.94,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_45BABE92_4A9A_75B6_41B3_E581D822C4B7",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.34,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_45B60EA1_4A9A_7592_41C5_EC799343A70E",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 87.9,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_45A42EC1_4A9A_7592_41C4_B5D0E07F5723",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 90.55,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_45931ED0_4A9A_75B2_41C8_D99C27F26015",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.15,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_4581FEEF_4A9A_756D_41B2_E9DC38FDCA2E",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 177.51,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_45FE7EFF_4A9A_756E_41B0_1011A89D63F4",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -90.78,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_45EDCEFF_4A9A_756E_41BD_0A097ED028BB",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 92.89,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_45DD3F0F_4A9A_74AE_41D0_A29B769467D4",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -91.98,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_45CB3F1E_4A9A_74AE_41B9_115F83FCD67F",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 99.69,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_45385F1E_4A9A_74AE_41C5_62F8F80B1E37",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -99.85,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_45281F2E_4A9A_74EE_41C5_5C4ED81F35D2",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 88.33,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_45260F2E_4A9A_74EE_41D0_7B6C6836DC8F",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.12,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_45176F3F_4A9A_74EE_41C5_4F91EFDF4A52",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 87.85,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_45052F4D_4A9A_7492_41B9_B6F0456206C1",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 89.28,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_45724F4D_4A9A_7492_41D1_EAB257913FDF",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 177.94,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_47536F9B_4A9A_73B5_41BD_38E30986CF93",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -93.14,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_47569F9B_4A9A_73B5_41B0_33D0A90430B5",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -89.76,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_474AAFAB_4A9A_7396_41D1_1D343F9C029E",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 84.36,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_47408FBB_4A9A_73F6_419C_EA8DBAEB49A1",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -86.03,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_47464FBB_4A9A_73F6_41C7_A0DDA735AD10",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 89.84,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_44BABFCA_4A9A_7396_41B7_3B0C0B68C588",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 91.71,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_44B0AFCA_4A9A_7396_41B6_7E41DEEA562D",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -93.32,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_44B74FDA_4A9A_73B6_41CE_73BDD4A6F753",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 89.23,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_44AD5FEA_4A9A_7396_41D1_FE67D70A9341",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 175.89,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_44A1AFEA_4A9A_7396_41C7_E9D18EEC4F27",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 11.84,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_44A7CFF9_4A9A_7372_41D1_7CA0EEE903AC",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -89.39,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_449C3FF9_4A9A_7372_41CC_D8505FE73C76",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 82.43,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_44926009_4A9A_6C92_41C5_168E4EF91D25",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -92.99,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_448F4018_4A9A_6CB3_417B_5C67CF6238C0",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 91.81,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_44F90018_4A9A_6CB3_41D2_444C7702D815",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -89.58,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_44F28028_4A9A_6C92_41AB_15CB510A80F1",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 90.04,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_44EE4038_4A9A_6CF2_4195_E2986CB8323D",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 95.17,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_44D84038_4A9A_6CF2_41CC_5DB587EED083",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -80.43,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_44D56047_4A9A_6C9E_41CA_2FB11523171C",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 91.81,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_44CFB047_4A9A_6C9E_41CA_EC3F2B94196F",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -91.45,
   "pitch": 0
  }
 },
 {
  "data": {
   "label": "Reza_-_\u0639\u0645\u0631_\u0627\u0632_\u06a9\u0641_\u0631\u0627\u06cc\u06af\u0627\u0646\u06cc_\u0645\u06cc_\u0631\u0648\u062f_\u06a9\u0648\u062f\u06a9\u06cc_\u0631\u0641\u062a_\u0648_\u062c\u0648\u0627\u0646\u06cc_\u0645\u06cc_\u0631\u0648\u062f"
  },
  "class": "MediaAudio",
  "id": "audio_45FFCBFB_4A95_B376_41B2_7ED6FE1F9A49",
  "autoplay": true,
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_45FFCBFB_4A95_B376_41B2_7ED6FE1F9A49.mp3",
   "oggUrl": "media/audio_45FFCBFB_4A95_B376_41B2_7ED6FE1F9A49.ogg"
  }
 }
], "children": [
 {
  "class": "ViewerArea",
  "progressHeight": 10,
  "toolTipOpacity": 1,
  "progressBottom": 0,
  "paddingRight": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "playbackBarProgressBorderRadius": 0,
  "transitionMode": "blending",
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowOpacity": 0,
  "toolTipDisplayTime": 600,
  "paddingLeft": 0,
  "toolTipFontColor": "#606060",
  "playbackBarHeadShadowVerticalLength": 0,
  "borderRadius": 0,
  "toolTipPaddingTop": 4,
  "progressBorderSize": 0,
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "shadow": false,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowOpacity": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarBottom": 5,
  "playbackBarProgressOpacity": 1,
  "playbackBarBorderSize": 0,
  "minHeight": 50,
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "paddingBottom": 0,
  "toolTipFontSize": 12,
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBorderSize": 0,
  "progressBarOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBarBorderRadius": 0,
  "toolTipShadowColor": "#333333",
  "height": "100%",
  "playbackBarHeadShadow": true,
  "toolTipTextShadowColor": "#000000",
  "paddingTop": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarLeft": 0,
  "width": "100%",
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadHeight": 15,
  "toolTipShadowHorizontalLength": 0,
  "progressRight": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadOpacity": 1,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeight": 10,
  "minWidth": 100,
  "toolTipPaddingBottom": 4,
  "progressOpacity": 1,
  "toolTipBorderRadius": 3,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipBorderColor": "#767676",
  "id": "MainViewer",
  "toolTipFontFamily": "Arial",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadWidth": 6,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipFontStyle": "normal",
  "playbackBarBorderRadius": 0,
  "progressBorderColor": "#000000",
  "progressBorderRadius": 0,
  "toolTipFontWeight": "normal",
  "progressBarBorderSize": 0,
  "transitionDuration": 500,
  "playbackBarBackgroundOpacity": 1,
  "progressLeft": 0,
  "playbackBarRight": 0,
  "playbackBarOpacity": 1,
  "toolTipBorderSize": 1,
  "borderSize": 0,
  "toolTipPaddingRight": 6
 }
], 
 "start": "this.playAudioList([this.audio_45FFCBFB_4A95_B376_41B2_7ED6FE1F9A49]); this.mainPlayList.set('selectedIndex', 0)",
 "class": "Player",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "scrollBarColor": "#000000",
 "width": "100%",
 "vrPolyfillScale": 0.5,
 "paddingLeft": 0,
 "height": "100%",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "mobileMipmappingEnabled": false,
 "gap": 10,
 "shadow": false,
 "minWidth": 20,
 "scrollBarMargin": 2,
 "scripts": {
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "existsKey": function(key){  return key in window; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getKey": function(key){  return window[key]; },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "registerKey": function(key, value){  window[key] = value; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } }
 },
 "id": "rootPlayer",
 "data": {
  "name": "Player443"
 },
 "minHeight": 20,
 "layout": "absolute",
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "backgroundPreloadEnabled": true,
 "creationPolicy": "delayed",
 "contentOpaque": false,
 "overflow": "visible"
})