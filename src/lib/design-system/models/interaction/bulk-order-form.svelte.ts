import { BulkOrderFormModel as BulkOrderFormModelClass } from '../../classes/interaction/bulk-order-form';

export function BulkOrderFormModel(
	...args: ConstructorParameters<typeof BulkOrderFormModelClass>
): InstanceType<typeof BulkOrderFormModelClass> {
	return new BulkOrderFormModelClass(...args);
}

export default BulkOrderFormModel;


