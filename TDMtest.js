{
  "Name": "TDM",
  "Description": "Team Death Match. Битва двух команд",
  "StartClientVersion": 573,
  "MapFilter": {
    "IsBlank": false,
    "HasParcourEnd": false
  },
  "MapLists": [
    {
      "MapListId": 324,
      "Name": "Официальные карты"
    },
    {
      "MapListId": 581
    }
  ],
  "Parameters": {
    "Bool": [
      {
        "Name": "MapRotation",
        "DisplayName": "GmParams/MapRotation",
        "Default": true,
        "Order": 1
      },
      {
        "Name": "OnlyKnives",
        "DisplayName": "GmParams/OnlyKnives",
        "Order": 2
      },
      {
        "Name": "OnlyPlayerBlocksDmg",
        "DisplayName": "GmParams/OnlyPlayerBlocksDmg",
        "Order": 3
      },
      {
        "Name": "LoosenBlocks",
        "DisplayName": "GmParams/LoosenBlocks",
        "Order": 4
      },
      {
        "Name": "FriendlyFire",
        "DisplayName": "GmParams/FriendlyFire",
        "Order": 5
      }
    ],
    "Dropdown": [
      {
        "Name": "default_game_mode_length",
        "DisplayName": "GmParams/Length",
        "Default": "Length_M",
        "Order": 6,
        "Variants": [
          {
            "Name": "Length_S",
            "DisplayName": "GmParams/Length_S"
          },
          {
            "Name": "Length_M",
            "DisplayName": "GmParams/Length_M"
          },
          {
            "Name": "Length_L",
            "DisplayName": "GmParams/Length_L"
          },
          {
            "Name": "Length_XL",
            "DisplayName": "GmParams/Length_XL"
          }
        ]
      }
    ]
  }
}
