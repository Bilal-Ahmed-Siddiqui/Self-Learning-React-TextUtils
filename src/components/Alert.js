import React from "react";

export default function Alert(props) {
    const capitalize = ()=>{
        let low = props.alert.type.toLowerCase();
        return low.charAt(0).toUpperCase() + low.slice(1);
    }
  return (
    <div style={{height: '50px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalize()}!</strong> {props.alert.message}

    </div>}
    </div>
  );
}
