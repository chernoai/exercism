export function createVisitor(name, age, ticketId) {
  let ticket = { name: name, age: age, ticketId: ticketId };
  return ticket;
}
console.log(createVisitor("Verena Nardi", 45, "H32AZ123"));

export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}
console.log(
  revokeTicket({ name: "Verena Nardi", age: 45, ticketId: "H32AZ123" })
);

let tickets = {
  "0H2AZ123": null,
  "23LA9T41": "Verena Nardi",
};
export function ticketStatus(tickets, ticketId) {
  if (tickets.hasOwnProperty(ticketId)) {
    if (tickets[ticketId] == null) {
      return "not sold";
    } else {
      return `sold to ${tickets[ticketId]}`;
    }
  } else {
    return "unknown ticket id";
  }
}
console.log(ticketStatus(tickets, "23LA9T41"));

export function simpleTicketStatus(tickets, ticketId) {
  if (tickets[ticketId] == null || undefined) {
    return "invalid ticket !!!";
  } else {
    return tickets[ticketId];
  }
}
console.log(simpleTicketStatus(tickets, "23LA9T41"));

const visitorNew = {
  name: "Verena Nardi",
  age: 45,
  ticketId: "H32AZ123",
  gtc: {
    signed: true,
    version: "2.1",
  },
};
export function gtcVersion(visitor) {
  if (visitor.hasOwnProperty("gtc")) {
    return visitor.gtc.version;
  }else{
    return undefined
  }
}
console.log(gtcVersion(visitorNew));
