var express = require("express");
var Pusher = require("../lib/pusher");

var pusher = new Pusher({
  appId: '332590',
  key: 'b28deeddbc65ebb4f7e5',
  secret: 'dcad662aa9e161d684ba',
  encrypted: true, // optional, defaults to false
  cluster: 'ap1', // optional, if `host` is present, it will override the `cluster` option.
});

pusher.trigger('laravel-channel', 'App\\Events\\PusherEvent', { message: "hello world" });