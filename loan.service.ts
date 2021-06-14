import { Injectable } from '@angular/core';
import { LoanDetails } from './loan-details';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor() { }
  getAllDetails():LoanDetails[]
  {
    let NormalPack : LoanDetails ={
      loanName:'Normal Home Loan',
      loanCost:65000,
      loanRating:'4.0',
      loanInterest:15,
      loanStatus:'Approved',
      loanImage:'assets/HomeLoanImage/HomeLoan1.jpg'
    }

    let PremiumPack : LoanDetails ={
      loanName:'Premium Home Loan',
      loanCost:100000,
      loanRating:'4.5',
      loanInterest:6,
      loanStatus:'Approved',
      loanImage:'assets/HomeLoanImage/HomeLoan2.jpg'
    }

    let SuperValuePack : LoanDetails ={
      loanName:'Super Value Home Loan',
      loanCost:300000,
      loanRating:'3.5',
      loanInterest:4,
      loanStatus:'Approved',
      loanImage:'assets/HomeLoanImage/HomeLoan3.jpg'
    }

    
    let WorkingStudentPack : LoanDetails ={
      loanName:'Working Student Home Loan',
      loanCost:85000,
      loanRating:'5.0',
      loanInterest:2,
      loanStatus:'Approved',
      loanImage:'assets/HomeLoanImage/HomeLoan.jpg'
    }
    return[NormalPack,PremiumPack,SuperValuePack,WorkingStudentPack];
  }
  
}

