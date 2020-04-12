class License {
  public calculateNum: () => void;

  constructor(param: any) {
    this.calculateNum = () => {
      // param + 21873621783;
    };
  }
}

class PersonalLicense extends License {
  constructor(param: any) {
    super(param);
    this.calculateNum();
  }
}

class BusinessLicense extends License {
  getUsers: () => void;

  constructor(param: any) {
    super(param);
    this.calculateNum();
    this.getUsers = () => {
      // get all users...
    };
  }
}