import type { ButtonFactoryContractInput } from '$stylist/button/interface/slot/button-factory-contract-input';
import type { ButtonFactoryHtmlInput } from '$stylist/button/interface/slot/button-factory-html-input';
import type { ButtonFactorySlotsInput } from '$stylist/button/interface/slot/button-factory-slots-input';

export interface ButtonFactoryInput {
	contract: ButtonFactoryContractInput;
	html: ButtonFactoryHtmlInput;
	slots: ButtonFactorySlotsInput;
}
