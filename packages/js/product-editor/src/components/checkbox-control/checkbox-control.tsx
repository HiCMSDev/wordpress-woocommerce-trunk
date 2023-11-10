/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
import { CheckboxControl, Tooltip } from '@wordpress/components';
import { Icon, help } from '@wordpress/icons';

/**
 * Internal dependencies
 */

export type CheckboxProps = {
	label: string;
	value: boolean | string | null;
	tooltip?: string;
	title?: string;
	onChange: ( selected: boolean | string | null ) => void;
	checkedValue?: string | null;
	uncheckedValue?: string | null;
};

export const Checkbox: React.FC< CheckboxProps > = ( {
	value,
	label,
	onChange,
	tooltip,
	title,
	checkedValue,
	uncheckedValue,
}: CheckboxProps ) => {
	function isChecked() {
		if ( checkedValue !== undefined ) {
			return checkedValue === value;
		}
		return value as boolean;
	}

	function handleChange( checked: boolean ) {
		if ( checked ) {
			onChange( checkedValue !== undefined ? checkedValue : checked );
		} else {
			onChange( uncheckedValue !== undefined ? uncheckedValue : checked );
		}
	}
	return (
		<div className="woocommerce-product-form__checkbox">
			{ title && <h4>{ title }</h4> }
			<div className="woocommerce-product-form__checkbox-wrapper">
				<CheckboxControl
					label={ label }
					checked={ isChecked() }
					onChange={ handleChange }
				/>
				{ tooltip && (
					<Tooltip
						text={ <span>{ tooltip }</span> }
						position="top center"
						// eslint-disable-next-line @typescript-eslint/ban-ts-comment
						// @ts-ignore Incorrect types.
						className={
							'woocommerce-product-form__checkbox-tooltip'
						}
						delay={ 0 }
					>
						<span className="woocommerce-product-form__checkbox-tooltip-icon">
							<Icon icon={ help } size={ 21.94 } fill="#949494" />
						</span>
					</Tooltip>
				) }
			</div>
		</div>
	);
};
