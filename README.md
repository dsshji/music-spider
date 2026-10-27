# Arachnophone

A spider walks across Wikipedia and plays it as music.

Each footstep lands on something: a word, a link, a number, a picture, or empty space. Each of those makes a sound. All the sounds are in one key and on one beat, so the walk becomes a song. When the article runs out, the spider follows a link it stepped on and keeps walking. The web of links becomes a web of music.

## Running it

Open `index.html` in Chrome and click **Begin**. After that the spider moves and plays on its own. Headphones or speakers are recommended.

If Wikipedia doesn't load from the file, run `node serve.js` in this folder and go to `http://localhost:5173`.

## What each step plays

| The foot lands on | Sound |
|---|---|
| a word | a plucked note; the same word always plays the same note |
| a Capitalised word | louder, an octave higher |
| a link | a bell |
| a number or year | kick drum |
| *the, of, and…* | hi-hat |
| a heading | gong |
| an image | the colour under the foot: hue picks the note, saturation makes it brighter |
| empty margin | silence |

## How it stays one song

- Each article gets its own minor key and a four-chord loop, with bass and a soft pad underneath.
- Melody notes only use the minor pentatonic scale, which can't clash with the chords.
- The legs move in a real spider gait (four alternating legs at a time), and feet only land on a 16th-note grid at 88 bpm.
- On beats 1 and 3, notes snap to the current chord.
- Each link followed moves the key up a fifth, so the whole journey is one chain of related keys.

The strip at the bottom draws the melody as a graph, with a yellow dot riding the curve. The current chord is written as a sum of sine waves.

## Controls

The spider doesn't need you. If you want to steer it:

- **Click anywhere** and the spider walks there.
- **Click a link** and the spider walks to it and goes through to that article.

The buttons in the top-right corner appear when you move the mouse:

| Button | Key | What it does |
|---|---|---|
| follow a link ⟶ | N | leave now through the last link stepped on |
| random article | R | jump to a random Wikipedia page |
| pad: on/off | P | turn the background chords on or off |
| hide | H | hide the buttons completely |
| – | F | fullscreen |

## Credits

The spider's look references Slava Rybin's procedural spiders. The graph strip references music visualised as function plots. Built with plain HTML, Canvas and Web Audio, with live text and images from the Wikipedia API. Made with AI assistance (Claude).
