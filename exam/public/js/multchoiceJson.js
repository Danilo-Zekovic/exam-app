var multiple = "[\n" + [ 
  '{"text": "First state to legalize gay marriage", "answer": "Massachusetts", "decoys": ["Massachusetts", "Oregon", "New York", "Indiana"] }',
  '{"text": "The last state to join the union", "answer": "Hawaii", "decoys": ["Alaska", "Arizona", "Hawaii","Ohio" ] }',
  '{"text": "Harry Truman\'s home state", "answer": "Missouri", "decoys": ["Illinois", "Missouri", "Indiana", "Ohio" ] }',
  '{"text": "Largest state by area", "answer": "Alaska", "decoys": ["Texas", "Montana", "Rhode Island","Alaska" ] }',
  '{"text": "John Glenn\'s home state", "answer": "Ohio", "decoys": ["Pennsylvania", "Ohio", "Florida","Illinois" ] }',
  '{"text": "State where Detroit Pistons first played", "answer": "Indiana", "decoys": ["Indiana", "Minnesota", "Ohio", "Indiana" ] }',
  '{"text": "The first state to join the union", "answer": "Delaware", "decoys": ["Georgia", "Massachusetts", "Rhode Island","Delaware" ] }'
].join(",\n") + "\n]";

if (typeof module != "undefined" && module.exports)
  module.exports = multiple;