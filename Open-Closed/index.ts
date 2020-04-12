// Wrong ✖
class ContractClt {
  salary(): number {...}
}

class Intership {
  scholarship(): number {...}
}

class ContractPj {
  salary(): number {...}
}

class PaymentMethod {
  payment(worker) {
    let payment: number;

    if (worker instanceof ContractClt) {
      payment = worker.salary();
    }
    if (worker instanceof Intership) {
      payment = worker.scholarship();
    }
    if(worker instanceof ContractPj) {
      payment = worker.salary();
    }

    return payment;
  }
}

// ----------------------------------------------------------------------------------- //

// Right ✔
interface IPayment {
  remuneration(): number {...}
}

class ContractClt implements IPayment {
  remuneration(): number {...}
}

class Intership implements IPayment  {
  remuneration(): number {...}
}

class ContractPj implements IPayment  {
  remuneration(): number {...}
}

class PaymentMethod {
  payment(worker: IPayment) {
    return worker.remuneration();
  }
}