import React from "react";
import { Field } from "formik";

function FilteredPropsInputField({ className, as, ...props }) {
	return <Field className={className} as={as} {...props} />;
}

export default FilteredPropsInputField;
