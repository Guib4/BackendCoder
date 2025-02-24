class TicketManager {
    #events
    #id = 0;
    #basePrice = 10;
    constructor() {
        this.#events = [];
    }
    getEvents = () => this.#events;
    addEvent = (nome, lugar, preco, capacidade = 50, data) => {
        this.#id = this.#id + 1
        const event = {
            id: this.#id,
            nome,
            lugar,
            preco: this.#basePrice + preco,
            capacidade,
            data: data ?? `${new Date().getDate()}/${new Date().getMonth() + 1}`,
            participants: [],
        };
        this.id = this.id + 1;
        this.#events.push(event)
    }
    addUser = (idEvent, idUser) => {
        const index = this.#events.findIndex((event) => event.id === idEvent)
        console.log(index)

        //console.log(this.#events[0])
        //this.#events[index].participants.push(idUser);

        if (this.#events[index] === undefined) {
            console.log('Evento não encontrado');
            return false;
        }
        const participantsExist = this.#events[index].participants.includes(idUser);
        if (!participantsExist) {
            this.#events[index].participants.push(idUser);
        }


        //console.log(this.#events[0])
        //this.#events[index].participants.push(idUser);
    }
    putEventoEnGira = (idEvent, novaCidade, novaData) => {
        this.#id = this.#id + 1;
        const index = this.#events.findIndex((event) => event.id === idEvent);
        console.log(index);

        if (this.#events[index] === undefined) {
            console.log('Evento não encontrado');
            return false;
        }
        const newEvent = {
            ...this.#events[index],
            id: this.#id,
            lugar: novaCidade,
            data: novaData ?? new Date().toLocaleDateString("BR"),
            participants: [],
        };
        this.#events.push(newEvent);
    };

}


const evento = new TicketManager();
console.log(evento.getEvents());
evento.addEvent("Rock in Rio", "Lisboa", 10, 40, "10/10");
console.log(evento.getEvents());
evento.addUser(1, 1);
console.log(evento.getEvents());
evento.addUser(1, 2);
console.log(evento.getEvents());