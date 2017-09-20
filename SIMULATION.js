// Switch on the power line
// 打开浏览器（比如chrome）

// Remember to put on PROTECTION
// 打开控制台

// Lay down your pieces
// 粘贴上这份代码

// And let's begin OBJECT CREATION
var me = new (function Mili() { return { init: function (data) { this.times = data.times; this.love = data.love; } }; })();

// Fill in my data parameters
var data = { times: -1/* Illegal arguments */, love: function () { alert('love U'); } };

// INITIALIZATION
me.init(data);

// Set up our new world
var world = { execute: function () { this.times--; this.love(); this.times != 0 && world.execute(); }.bind(me) };

// And let's begin the SIMULATION
world.execute(me);
