## Angular SVG US Map

This package is used to generate US SVG Map and also giving ability to set callback function and some parameters to change fill & stocke color.

![usmap](https://user-images.githubusercontent.com/17896904/28911043-c754c656-784c-11e7-9f2a-47f7304b6811.png)

### How to install

<pre>npm install ng4-us-map</pre>

### Configuration

app.module.ts

<pre>import { UsMapModule } from 'ng4-us-map';</pre>

You need to add this module in @NgModule(Imports). That's it.

### Accessing Component

<pre>&lt;us-map&gt;&lt;/us-map&gt;</pre>

### Event binding @Output

<pre>&lt;us-map (onMapClick)="YourFuncation($event)"&gt;&lt;/us-map&gt;</pre>

By configuring click event, you will get state abbr by clicking on state area.

### Addtional attributes configuration @Input

`fillColor` you can change state text color.
`fillStateColor` you can change all state background color.
'strokeColor' you can change all state border color.

Moreover, you can apply your own css to beautify this component.
