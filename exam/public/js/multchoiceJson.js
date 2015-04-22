var multiple = "[\n" + [ 
  '{"text": "First state to legalize gay marriage", "answer": "Massachusetts", "decoys": ["California", "Oregon", "New York", "Indiana"] }',
  '{"text": "The last state to join the union", "answer": "Hawaii", "decoys": ["Alaska", "Arizona", "Kansas","Ohio" ] }',
  '{"text": "Harry Truman\'s home state", "answer": "Missouri", "decoys": ["Illinois", "Kansas", "Indiana", "Ohio" ] }',
  '{"text": "Largest state by area", "answer": "Alaska", "decoys": ["Texas", "Montana", "Rhode Island","Ohio" ] }',
  '{"text": "John Glenn\'s home state", "answer": "Ohio", "decoys": ["Pennsylvania", "Arizona", "Florida","Illinois" ] }',
  '{"text": "State where Detroit Pistons first played", "answer": "Indiana", "decoys": ["Michigan", "Minnesota", "Ohio", "Indiana" ] }',
  '{"text": "The first state to join the union", "answer": "Delaware", "decoys": ["Georgia", "Massachusetts", "Rhode Island","Illinois" ] }'
].join(",\n") + "\n]";

if (typeof module != "undefined" && module.exports)
  module.exports = multiple;