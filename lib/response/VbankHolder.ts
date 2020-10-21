import _ from 'lodash';
import ResponseBase from './index';

class VbankHolder extends ResponseBase {
  public bank_holder: string;

  public setAttributes(response: VbankHolder): void {
    const { bank_holder } = response;

    this.bank_holder = bank_holder;
  }
}

export {};
export default VbankHolder;