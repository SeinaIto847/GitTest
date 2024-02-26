## HCL
### Hashi Corp Language

- 簡単なプログラムを組むことができる！（関数など）
- コメントを書くことができる
- `=` で指定
- ヒアドキュメントが可能

- ブロック
  - resourceなどの記述
  - 大まかな括り

- ブロックタイプ
  - `resource`/`variable` など

- ラベル
  - ブロックタイプの種類によって変わる

### ブロックタイプ
| 種類 | 説明 |
|--- | --- |
|種類|説明|
`locals`| 外部から変更できないローカル変数
`variable`| 外から変更可能な変数
`terraform` | Terraformの設定
`provider` | プロバイダ
`data` | Terraform管理していないリソースの取り込み
`resource` | Terraform管理対象となるリソース
`output` | 外部から参照できるようにする値

### 変数　`locals`/`variables`
- `locals`
  - ローカルな変数
  - プライベートな変数
  - 外部から変更はできない
  - localsブロックで定義
  - `${local.<>NAME}`で参照

```hcl
locals {
    project = "tastylog"
    env = "dev"
}
resource <RESOURCE_TYPE> <RESOURCE_NAME> {
    ・・・
    tags = {
        Name = "${local.project}"-${local.env}-vpc"
    }
}
```

- `variables`
  - 外部から変更可能な変数
  - コマンドライン実行時にオプションやファイル指定で上書きできる
  - variableブロックで変数１つを定義
  - `&{var.<NAME>}`で参照

```hcl
variable "project" { // 変数名
    type = "string" // 変数の型
    default = "tastylog" // 変数のデフォルト値
}

resource <REXOURCE_TYPE> <RESOURCE_NAME> {
    ・・・
    tags = {
        Name = "${var.project}-dev-vpc" // 
    }
}
```

### データ型
| 種類 | 型 | 説明 |
| --- | --- | --- |
プリミティブ | string | Unicode文字列
プリミティブ | number | 数値（整数・少数）
プリミティブ | bool | true/false
構造体 | object({<NAME>=<TYPE>, ... }) | Key/Value型
構造体 | tuple([<TYPE>, ... ]) | 各列の型が決まっている配列
コレクション | list(<TYPE>) | 特定の型で構成される配列
コレクション | map(<TYPE)> | キー：文字列
コレクション | set(<TYPE>) | 値の重複がない（一意）の配列

#### プリミティブ
- 基本となるデータ型
```hcl
variable "message" {
    type = string
    default = "Hello World"    # 文字列
}

variable "max_count" {
    type = number
    default = 10    # 数値

}

variable "is_enable" {
    type = bool
    default = true    # true or false

}

```

### object
- キーバリュー型で定義されるデータ型
```hcl
variable "obj_sample" {
    type = object ({    # Key = Value
        name = string   # Key毎に型定義できる
        age = number
    })
    default = {
        name = "tanaka"
        age = 28
    }
}

username = var.obj_sample.name   # obj_sampleのnameを参照
```
### tuple
- 配列のN番目にどういった型を使うかが決められたデータ型
```hcl
variable "tuple_sample" {
    type = tuple([
        string, number   # 文字列, 数値　の配列で指定
    ])
    default = ["tanaka", 28]   # 文字列：tanaka, 数値：28と指定
}

username = var.tuple_sample[0]
```

### list
- すべて同じ型で指定される配列
```hcl
variable "list_sample" {
    type = list(string)
    default = ["tanaka", "sato"]   # 単純な配列（リスト）
}

username = var.list_sample[0]
```

### map
- キーが文字列、バリューが指定された型となる配列
```hcl
variable "map_sample" {
    type = map(string)   # バリュー：文字列
    default = {
        "High" = "m5.2xlarge"　　　# 配列が文字列のデータ
        "Mid" = "m5.large"
        "Low" = "t2.micro"
    }
}

instance = var.map_sample.High
```

### set
- Valueの重複が排除される
  ```hcl
  variable "set_sample" {
    type = set(string)
    default = [
        "tanaka",
        "sato",
        "tanaka",
        "sato"
    ]
  }

  [for itm in var.set_sample : itm] 
  # 出力時：重複排除される
  toset([
    "sato",
    "tanaka"
  ])
  ```