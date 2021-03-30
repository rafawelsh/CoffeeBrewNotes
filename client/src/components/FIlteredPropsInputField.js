import React from "react";
import { Field } from "formik";

function FilteredPropsInputField({ className, as, valid, error, ...props }) {
	return <Field className={className} {...props} />;
}

export default FilteredPropsInputField;
