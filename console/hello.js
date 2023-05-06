#!/usr/bin/env node

//pass name as argument, or use OS username, fallback to world
const nameArg =
  process.argv[2] || process.env.USER || process.env.USERNAME || "world";
const capName = nameArg.charAt(0).toUpperCase() + nameArg.slice(1);

//output message
console.log(`Hello ${capName}!`);
