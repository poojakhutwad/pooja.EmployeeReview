export class EmpRevInfo{
    public firstName:string;
    public lastName: string;
    public day: number;
    public month: number;
    public year: number;
    public empTitle: string;
    public empDepartment: string;
    public empPerformance: string;
    public ranking: string;
    public superwiserFirstName: string;
    public superwiserLastName: string;
    public isSubmited: boolean;

    constructor(FirstName, LastName, Day, Month, Year, EmpTitle, EmpDepartment, EmpPerformance, Ranking, SuperwiserFirstName, SuperwiserLastName,IsSubmited){
       this.firstName = FirstName;
       this.lastName = LastName;
       this.empTitle = EmpTitle;
       this.day = Day;
       this.month = Month;
       this.year = Year;
       this.empDepartment = EmpDepartment;
       this.empPerformance = EmpPerformance;
       this.ranking = Ranking;
       this.superwiserFirstName = SuperwiserFirstName;
       this.superwiserLastName = SuperwiserLastName;
       this.isSubmited = IsSubmited;
    }
    
}