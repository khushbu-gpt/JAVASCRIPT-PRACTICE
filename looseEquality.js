// | Value1  | Value2      | `Value1 == Value2` | Reason                                                     |
// | ------- | ----------- | ------------------ | ---------------------------------------------------------- |
// | `false` | `0`         | true               | Boolean → Number (`false → 0`)                             |
// | `false` | `""`        | true               | Boolean → Number (`false → 0`), String → Number (`"" → 0`) |
// | `false` | `null`      | false              | `null` only equals `undefined`                             |
// | `false` | `undefined` | false              | `undefined` only equals `null`                             |
// | `0`     | `""`        | true               | String → Number (`"" → 0`)                                 |
// | `0`     | `null`      | false              | `null` only equals `undefined`                             |
// | `0`     | `undefined` | false              | same reason                                                |
// | `""`    | `null`      | false              | same reason                                                |
// | `""`    | `undefined` | false              | same reason                                                |
// | `null`  | `undefined` | true               | special JS rule                                            |
// | `NaN`   | anything    | false              | NaN is never equal to anything, even itself                |
