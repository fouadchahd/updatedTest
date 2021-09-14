export type RootStackParamList = {
    Root: undefined;
    Account: undefined;
    NotFound: undefined;
    PaymentHistory: { accountNo: string; status: string };
  };
  
  export interface ILoan {
    account_no: string;
    customer_id: string;
    status: string;
    present_balance: string;
    tenure: string;
    total_loan_amount: string;
    installment_amount: string;
    amount_due: string;
  }
  