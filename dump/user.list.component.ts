export class UserListComponent implements OnInit 
// export class UserListComponent
{

  // @Input() users: User[] = [];
  users: User[] = [];
  
  name: string;
  password: string;


  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  
  ngOnInit(): void 
  {
    const routeParams = this.route.snapshot.paramMap;
  }

  logIn(name: string, password: string)
  {
    if(!(name && password))
    {
      console.log("Please fill all the blanks");
      return;
    }
    else
    {
      for(let i = 0; i < users.length; i++)
      {
        if(users[i].name == name || users[i].password == password)
        {
          // add routing here
          window.alert("Welcome " + users[i].name + " to your homebanking system account by pm.");
        }
        else if(i == users.length-1 && (users[i].name != name || users[i].password != password))
        {
          window.alert("Incorrect name or password...")
        }
      }
    }
    
  }

  // signUp(name: string, email:string, password: string)
  signUp(name: string, password: string) // not working properly
  {

    // if(!(name && password))
    // {
    //   window.alert("Please fill all the blanks");
    //   return;
    // }

    let userID: number = this.users.length;
    console.log("number of users: " + userID);
    userID++;

    // const newUser: User = {name, email, password, userID};
    // const newUser: User = { name: name, password: password, userID: userID, userBalance: 0, userMovs: []};
    const newUser: User = { name: this.name, password: this.password, userID: userID, userBalance: 0, userMovs: []};

    const newMovement: Movements = {movNumber: newUser.userMovs.length, movType: 'Deposit', movDate: new Date(), movAmount: 100};

    newUser.userMovs.push(newMovement);
    this.users.push(newUser);

    // Clear inputs after push
    this.name = '';
    this.password = '';

    for(let i = 0; i < users.length; i++)
    {
      console.log("User " + i + ": " + users[i].name);
      console.log("User " + i + " Balance: " + users[i].userBalance);
    }

    window.alert("Users array len: " + this.users.length);
    // console.log("User name: " + newUser.name);
    // // console.log("User email: " + newUser.email);
    // console.log("User ID: " + newUser.userID);

    // window.alert("You're part of the family now, " + newUser.name + "!");

  }
}