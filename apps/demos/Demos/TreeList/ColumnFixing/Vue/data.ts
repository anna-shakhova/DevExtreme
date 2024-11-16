export type Employee = {
  ID: number;

  Head_ID: number;

  FirstName: string;

  LastName: string;

  Position: string;

  BirthDate: string;

  HireDate: string;

  Title: string;

  Address: string;

  City: string;

  State: string;

  Zipcode: number;

  Email: string;

  Skype: string;

  HomePhone: string;

  Department: string;

  MobilePhone: string;
};

export const employees: Employee[] = [{
  ID: 1,
  Head_ID: 0,
  FirstName: 'John',
  LastName: 'Heart',
  Position: 'CEO',
  BirthDate: '1964/03/16',
  HireDate: '1995/01/15',
  Title: 'Mr.',
  Address: '351 S Hill St.',
  City: 'Los Angeles',
  State: 'California',
  Zipcode: 90013,
  Email: 'jheart@dx-email.com',
  Skype: 'jheart_DX_skype',
  HomePhone: '(213) 555-9208',
  Department: 'Management',
  MobilePhone: '(213) 555-9392'
},
{
  ID: 2,
  Head_ID: 1,
  FirstName: 'Samantha',
  LastName: 'Bright',
  Position: 'COO',
  BirthDate: '1966/05/02',
  HireDate: '2004/05/24',
  Title: 'Dr.',
  Address: '5801 Wilshire Blvd.',
  City: 'Los Angeles',
  State: 'California',
  Zipcode: 90036,
  Email: 'samanthab@dx-email.com',
  Skype: 'samanthab_DX_skype',
  HomePhone: '2135550288',
  Department: 'Management',
  MobilePhone: '(213) 555-2858'
},
{
  ID: 3,
  Head_ID: 1,
  FirstName: 'Arthur',
  LastName: 'Miller',
  Position: 'CTO',
  BirthDate: '1972/07/11',
  HireDate: '2007/12/18',
  Title: 'Mr.',
  Address: '3800 Homer St.',
  City: 'Denver',
  State: 'Colorado',
  Zipcode: 90031,
  Email: 'arthurm@dx-email.com',
  Skype: 'arthurm_DX_skype',
  HomePhone: '3105556542',
  Department: 'Management',
  MobilePhone: '3105558583'
},
{
  ID: 4,
  Head_ID: 1,
  FirstName: 'Robert',
  LastName: 'Reagan',
  Position: 'CMO',
  BirthDate: '1974/09/07',
  HireDate: '2002/11/08',
  Title: 'Mr.',
  Address: '4 Westmoreland Pl.',
  City: 'Bentonville',
  State: 'Arkansas',
  Zipcode: 91103,
  Email: 'robertr@dx-email.com',
  Skype: 'robertr_DX_skype',
  HomePhone: '8185552438',
  Department: 'Management',
  MobilePhone: '8185552387'
},
{
  ID: 5,
  Head_ID: 1,
  FirstName: 'Greta',
  LastName: 'Sims',
  Position: 'HR Manager',
  BirthDate: '1977/11/22',
  HireDate: '1998/04/23',
  Title: 'Ms.',
  Address: '1700 S Grandview Dr.',
  City: 'Atlanta',
  State: 'Georgia',
  Zipcode: 91803,
  Email: 'gretas@dx-email.com',
  Skype: 'gretas_DX_skype',
  HomePhone: '8185550976',
  Department: 'Human Resources',
  MobilePhone: '8185556546'
},
{
  ID: 6,
  Head_ID: 3,
  FirstName: 'Brett',
  LastName: 'Wade',
  Position: 'IT Manager',
  BirthDate: '1968/12/01',
  HireDate: '2009/03/06',
  Title: 'Mr.',
  Address: '1120 Old Mill Rd.',
  City: 'Reno',
  State: 'Nevada',
  Zipcode: 91108,
  Email: 'brettw@dx-email.com',
  Skype: 'brettw_DX_skype',
  HomePhone: '6265555985',
  Department: 'IT',
  MobilePhone: '6265550358'
},
{
  ID: 7,
  Head_ID: 5,
  FirstName: 'Sandra',
  LastName: 'Johnson',
  Position: 'Controller',
  BirthDate: '1974/11/15',
  HireDate: '2005/05/11',
  Title: 'Mrs.',
  Address: '4600 N Virginia Rd.',
  City: 'Beaver',
  State: 'Utah',
  Zipcode: 90807,
  Email: 'sandraj@dx-email.com',
  Skype: 'sandraj_DX_skype',
  HomePhone: '5625558272',
  Department: 'Human Resources',
  MobilePhone: '5625552082'
},
{
  ID: 8,
  Head_ID: 4,
  FirstName: 'Edward',
  LastName: 'Holmes',
  Position: 'Sales Manager',
  BirthDate: '1973/07/14',
  HireDate: '2005/06/19',
  Title: 'Dr.',
  Address: '23200 Pacific Coast Hwy',
  City: 'Malibu',
  State: 'California',
  Zipcode: 90265,
  Email: 'edwardh@dx-email.com',
  Skype: 'edwardh_DX_skype',
  HomePhone: '3105556098',
  Department: 'Sales',
  MobilePhone: '3105551288'
},
{
  ID: 9,
  Head_ID: 3,
  FirstName: 'Barbara',
  LastName: 'Banks',
  Position: 'Support Manager',
  BirthDate: '1979/04/14',
  HireDate: '2002/08/07',
  Title: 'Mrs.',
  Address: '17985 Pacific Coast Hwy',
  City: 'Phoenix',
  State: 'Arizona',
  Zipcode: 90272,
  Email: 'barbarab@dx-email.com',
  Skype: 'barbarab_DX_skype',
  HomePhone: '3105559792',
  Department: 'Support',
  MobilePhone: '3105553355'
},
{
  ID: 10,
  Head_ID: 2,
  FirstName: 'Kevin',
  LastName: 'Carter',
  Position: 'Shipping Manager',
  BirthDate: '1978/01/09',
  HireDate: '2009/08/11',
  Title: 'Mr.',
  Address: '424 N Main St.',
  City: 'San Diego',
  State: 'California',
  Zipcode: 90012,
  Email: 'kevinc@dx-email.com',
  Skype: 'kevinc_DX_skype',
  HomePhone: '2135558038',
  Department: 'Shipping',
  MobilePhone: '2135552840'
},
{
  ID: 11,
  Head_ID: 5,
  FirstName: 'Cynthia',
  LastName: 'Stanwick',
  Position: 'HR Assistant',
  BirthDate: '1985/06/05',
  HireDate: '2008/03/24',
  Title: 'Ms.',
  Address: '2211 Bonita Dr.',
  City: 'Little Rock',
  State: 'Arkansas',
  Zipcode: 91208,
  Email: 'cindys@dx-email.com',
  Skype: 'cindys_DX_skype',
  HomePhone: '8185550828',
  Department: 'Human Resources',
  MobilePhone: '8185556655'
},
{
  ID: 12,
  Head_ID: 8,
  FirstName: 'Sam',
  LastName: 'Hill',
  Position: 'Sales Assistant',
  BirthDate: '1984/02/17',
  HireDate: '2012/02/01',
  Title: 'Mr.',
  Address: '645 Prospect Crescent',
  City: 'Pasadena',
  State: 'California',
  Zipcode: 91103,
  Email: 'sammyh@dx-email.com',
  Skype: 'sammyh_DX_skype',
  HomePhone: '6265543168',
  Department: 'Sales',
  MobilePhone: '6265557292'
},
{
  ID: 13,
  Head_ID: 10,
  FirstName: 'David',
  LastName: 'Jones',
  Position: 'Shipping Assistant',
  BirthDate: '1983/03/06',
  HireDate: '2011/04/24',
  Title: 'Mr.',
  Address: '391 S Orange Grove Blvd.',
  City: 'Pasadena',
  State: 'California',
  Zipcode: 91184,
  Email: 'davidj@dx-email.com',
  Skype: 'davidj_DX_skype',
  HomePhone: '6265554422',
  Department: 'Shipping',
  MobilePhone: '6265550281'
},
{
  ID: 14,
  Head_ID: 10,
  FirstName: 'Victor',
  LastName: 'Norris',
  Position: 'Shipping Assistant',
  BirthDate: '1986/07/23',
  HireDate: '2012/07/23',
  Title: 'Mr.',
  Address: '811 West 7th St.',
  City: 'Little Rock',
  State: 'Arkansas',
  Zipcode: 90017,
  Email: 'victorn@dx-email.com',
  Skype: 'victorn_DX_skype',
  HomePhone: '2135552827',
  Department: 'Shipping',
  MobilePhone: '2135559278'
},
{
  ID: 15,
  Head_ID: 10,
  FirstName: 'Mary',
  LastName: 'Stern',
  Position: 'Shipping Assistant',
  BirthDate: '1982/04/08',
  HireDate: '2012/08/12',
  Title: 'Ms.',
  Address: '113 N Cedar St.',
  City: 'Beaver',
  State: 'Utah',
  Zipcode: 91206,
  Email: 'marys@dx-email.com',
  Skype: 'marys_DX_skype',
  HomePhone: '8185558375',
  Department: 'Shipping',
  MobilePhone: '8185557857'
},
{
  ID: 16,
  Head_ID: 10,
  FirstName: 'Robin',
  LastName: 'Cosworth',
  Position: 'Shipping Assistant',
  BirthDate: '1981/06/12',
  HireDate: '2012/09/01',
  Title: 'Mrs.',
  Address: '501 N Main St.',
  City: 'Los Angeles',
  State: 'California',
  Zipcode: 90012,
  Email: 'robinc@dx-email.com',
  Skype: 'robinc_DX_skype',
  HomePhone: '8185559266',
  Department: 'Shipping',
  MobilePhone: '8185550942'
},
{
  ID: 17,
  Head_ID: 9,
  FirstName: 'Kelly',
  LastName: 'Rodriguez',
  Position: 'Support Assistant',
  BirthDate: '1988/05/11',
  HireDate: '2012/10/13',
  Title: 'Ms.',
  Address: '1601 W Mountain St.',
  City: 'Boise',
  State: 'Idaho',
  Zipcode: 91201,
  Email: 'kellyr@dx-email.com',
  Skype: 'kellyr_DX_skype',
  HomePhone: '8185559792',
  Department: 'Support',
  MobilePhone: '8185559248'
},
{
  ID: 18,
  Head_ID: 9,
  FirstName: 'James',
  LastName: 'Anderson',
  Position: 'Support Assistant',
  BirthDate: '1987/01/29',
  HireDate: '2012/10/18',
  Title: 'Mr.',
  Address: '4800 Hollywood Blvd',
  City: 'Atlanta',
  State: 'Georgia',
  Zipcode: 90027,
  Email: 'jamesa@dx-email.com',
  Skype: 'jamesa_DX_skype',
  HomePhone: '3235552087',
  Department: 'Support',
  MobilePhone: '3235554702'
},
{
  ID: 19,
  Head_ID: 9,
  FirstName: 'Anthony',
  LastName: 'Remmen',
  Position: 'Support Assistant',
  BirthDate: '1986/02/19',
  HireDate: '2013/01/19',
  Title: 'Mr.',
  Address: '1542 S Beacon St',
  City: 'Boise',
  State: 'Idaho',
  Zipcode: 90731,
  Email: 'anthonyr@dx-email.com',
  Skype: 'anthonyr_DX_skype',
  HomePhone: '3105550009',
  Department: 'Support',
  MobilePhone: '3105556625'
},
{
  ID: 20,
  Head_ID: 8,
  FirstName: 'Olivia',
  LastName: 'Peyton',
  Position: 'Sales Assistant',
  BirthDate: '1981/06/03',
  HireDate: '2012/05/14',
  Title: 'Mrs.',
  Address: '807 W Paseo Del Mar',
  City: 'Atlanta',
  State: 'Georgia',
  Zipcode: 90731,
  Email: 'oliviap@dx-email.com',
  Skype: 'oliviap_DX_skype',
  HomePhone: '3105558247',
  Department: 'Sales',
  MobilePhone: '3105552728'
},
{
  ID: 21,
  Head_ID: 6,
  FirstName: 'Taylor',
  LastName: 'Riley',
  Position: 'Network Admin',
  BirthDate: '1982/08/14',
  HireDate: '2012/04/14',
  Title: 'Mr.',
  Address: '7776 Torreyson Dr',
  City: 'San Jose',
  State: 'California',
  Zipcode: 90046,
  Email: 'taylorr@dx-email.com',
  Skype: 'taylorr_DX_skype',
  HomePhone: '3105552134',
  Department: 'IT',
  MobilePhone: '3105557276'
},
{
  ID: 22,
  Head_ID: 6,
  FirstName: 'Amelia',
  LastName: 'Harper',
  Position: 'Network Admin',
  BirthDate: '1983/11/19',
  HireDate: '2011/02/10',
  Title: 'Mrs.',
  Address: '527 W 7th St',
  City: 'Los Angeles',
  State: 'California',
  Zipcode: 90014,
  Email: 'ameliah@dx-email.com',
  Skype: 'ameliah_DX_skype',
  HomePhone: '2135553792',
  Department: 'IT',
  MobilePhone: '2135554276'
},
{
  ID: 23,
  Head_ID: 6,
  FirstName: 'Walter',
  LastName: 'Hobbs',
  Position: 'Programmer',
  BirthDate: '1984/12/24',
  HireDate: '2011/02/17',
  Title: 'Mr.',
  Address: '10385 Shadow Oak Dr',
  City: 'Chatsworth',
  State: 'California',
  Zipcode: 91311,
  Email: 'wallyh@dx-email.com',
  Skype: 'wallyh_DX_skype',
  HomePhone: '8185552478',
  Department: 'IT',
  MobilePhone: '8185558872'
},
{
  ID: 24,
  Head_ID: 6,
  FirstName: 'Bradley',
  LastName: 'Jameson',
  Position: 'Programmer',
  BirthDate: '1988/10/12',
  HireDate: '2011/03/02',
  Title: 'Mr.',
  Address: '1100 Pico St',
  City: 'San Fernando',
  State: 'California',
  Zipcode: 91340,
  Email: 'bradleyj@dx-email.com',
  Skype: 'bradleyj_DX_skype',
  HomePhone: '8185559098',
  Department: 'IT',
  MobilePhone: '8185554646'
},
{
  ID: 25,
  Head_ID: 6,
  FirstName: 'Karen',
  LastName: 'Goodson',
  Position: 'Programmer',
  BirthDate: '1987/04/26',
  HireDate: '2011/03/14',
  Title: 'Miss',
  Address: '309 Monterey Rd',
  City: 'South Pasadena',
  State: 'California',
  Zipcode: 91030,
  Email: 'kareng@dx-email.com',
  Skype: 'kareng_DX_skype',
  HomePhone: '6265550822',
  Department: 'IT',
  MobilePhone: '6265550908'
},
{
  ID: 26,
  Head_ID: 5,
  FirstName: 'Marcus',
  LastName: 'Orbison',
  Position: 'Travel Coordinator',
  BirthDate: '1982/03/02',
  HireDate: '2005/05/19',
  Title: 'Mr.',
  Address: '501 N Main St',
  City: 'Los Angeles',
  State: 'California',
  Zipcode: 90012,
  Email: 'marcuso@dx-email.com',
  Skype: 'marcuso_DX_skype',
  HomePhone: '2135552608',
  Department: 'Human Resources',
  MobilePhone: '2135557098'
},
{
  ID: 27,
  Head_ID: 5,
  FirstName: 'Sandra',
  LastName: 'Bright',
  Position: 'Benefits Coordinator',
  BirthDate: '1983/09/11',
  HireDate: '2005/06/04',
  Title: 'Ms.',
  Address: '7570 McGroarty Ter',
  City: 'Denver',
  State: 'Colorado',
  Zipcode: 91042,
  Email: 'sandrab@dx-email.com',
  Skype: 'sandrab_DX_skype',
  HomePhone: '8185555072',
  Department: 'Human Resources',
  MobilePhone: '8185550524'
},
{
  ID: 28,
  Head_ID: 6,
  FirstName: 'Morgan',
  LastName: 'Kennedy',
  Position: 'Graphic Designer',
  BirthDate: '1984/07/17',
  HireDate: '2012/01/11',
  Title: 'Mrs.',
  Address: '11222 Dilling St',
  City: 'San Fernando Valley',
  State: 'California',
  Zipcode: 91604,
  Email: 'morgank@dx-email.com',
  Skype: 'morgank_DX_skype',
  HomePhone: '8185553973',
  Department: 'IT',
  MobilePhone: '8185558238'
},
{
  ID: 29,
  Head_ID: 28,
  FirstName: 'Violet',
  LastName: 'Bailey',
  Position: 'Jr Graphic Designer',
  BirthDate: '1985/06/10',
  HireDate: '2012/01/19',
  Title: 'Ms.',
  Address: '1418 Descanso Dr',
  City: 'La Canada',
  State: 'California',
  Zipcode: 91011,
  Email: 'violetb@dx-email.com',
  Skype: 'violetb_DX_skype',
  HomePhone: '8185553085',
  Department: 'IT',
  MobilePhone: '8185552478'
},
{
  ID: 30,
  Head_ID: 5,
  FirstName: 'Kent',
  LastName: 'Samuelson',
  Position: 'Ombudsman',
  BirthDate: '1972/09/11',
  HireDate: '2009/04/22',
  Title: 'Dr.',
  Address: '12100 Mora Dr',
  City: 'St. Louis',
  State: 'Missouri',
  Zipcode: 90670,
  Email: 'kents@dx-email.com',
  Skype: 'kents_DX_skype',
  HomePhone: '5625559248',
  Department: 'Human Resources',
  MobilePhone: '5625559282'
}];
