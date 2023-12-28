import nats from "node-nats-streaming";

// create a client that is going to connect to the server
console.clear();
const stan = nats.connect("ticketing", "abc", {
  url: "http://localhost:4222",
});

stan.on("connect", () => {
  console.log("Publisher connected to NATS");

  const data = JSON.stringify({
    id: "123",
    title: "concert",
    price: 200,
  });
  stan.publish("ticket:created", data, () => {
    console.log("Event published");
  });
});
