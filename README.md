# Angular SVG US Map

This package is used to generate US SVG Map and also giving ability to set callback function and some parameters to change fill & stocke color.

![usmap](https://user-images.githubusercontent.com/17896904/28911043-c754c656-784c-11e7-9f2a-47f7304b6811.png)

## How to install

<pre>npm install ng4-us-map</pre>

## Configuration

app.module.ts

<pre>import { UsMapModule } from 'ng4-us-map';</pre>

You need to add this module in @NgModule(Imports). That's it.

## Accessing Component

<pre>&lt;us-map&gt;&lt;/us-map&gt;</pre>

## API Reference

### Inputs

|||
|-|-|
| `fillColor`      | Type: `string` Optional. Will change color of state name text. For Example: `fillColor="#C0C0C0"`       |
| `fillStateColor` | Type: `string` Optional. Will change background color of state area. For Example: `fillStateColor="#C0C0C0"` |
| `strokeColor`    | Type: `string` Optional. Will change border color of state area. For Example: `strokeColor="#C0C0C0"`     |

### Output
|||
|-|-|
| `onMapClick` | Will be emitted when state area has been clicked. It returns `state abbr`. (onMapClick) event. |

Moreover, you can apply your own css to beautify this component.
