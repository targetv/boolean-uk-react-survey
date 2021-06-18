import { useState } from "react";

function Form({setForm, form}){

  const initialForm = {
    username: "",
    email: "",
    logo: "",
    colour: "",
    consistency: "",
    timeSpent: [],
    review: "",
    bestFeatures: [],
    worstFeatures: []
}
   
  

     const [formValueInputs, setFormValueInputs] = useState(initialForm)
     
     function submitForm(event){
       event.preventDefault();
      setForm([...form, formValueInputs]);
      setFormValueInputs(initialForm);

     }
    

   
  ///  Uncontrolled Form

  //   function formSumbit(event){
  //     event.preventDefault();

     
  //   let timeSpentArray = [...event.target.timeSpent]
  //   .filter(item => item.checked).map(item => item.value)
    
  //   let bestFeatures = [...event.target.bestFeatures].filter(item => item.checked).map(item => item.value)
    
  //   let worstFeatures = [...event.target.worstFeatures].filter(item => item.checked).map(item => item.value )
    

  //   const newForm = {
  //     username: event.target.username.value,
  //     email: event.target.email.value,
  //     logo: event.target.logo.value,
  //     colour: event.target.colour.value,
  //     consistency: event.target.consistency.value,
  //     timeSpent: timeSpentArray,
  //     review: event.target.review.value,
  //     bestFeatures: bestFeatures,
  //     worstFeatures: worstFeatures
      
  // }


  //     console.log(newForm)

  //   }
    
  // function onChangeBestFeactures(event){
    //   const {checked, value, name} = event.target

    //   console.log({...formValueInputs, bestFeatures: [...formValueInputs.bestFeatures, value]})

    // }

    function onChangeHandlerCheckBox(event){
      const {name, checked, value} = event.target
      
     let updateArray =  checked ? [...formValueInputs[name], value] 
      :  formValueInputs[name].filter(item => item !== value)
      
      setFormValueInputs({...formValueInputs, [name]: updateArray })
    }
    

    function onChangeHandlerRadio(event){
      const {name, value} = event.target
      if(value){
        setFormValueInputs({...formValueInputs, [name]: value})
      }
      
    }

    function isCheckBoxChecked(arraySearch, keyValueToSearch){
      return arraySearch.includes(keyValueToSearch)
     
    }
  
   




    return(
        <form class="form" onSubmit={submitForm} >
        <h2>Tell us what you think about your rubber duck!</h2>
        <div class="form__group">
          <h3>What would you say that are the best features of your rubber duck?</h3>
          <ul>
  <li>
    <label
      ><input name="bestFeatures" type="checkbox" value="colour" checked={isCheckBoxChecked(formValueInputs.bestFeatures, "colour")}onChange={ onChangeHandlerCheckBox}  />It's
      yellow!</label
    >
  </li>
  <li>
    <label
      ><input name="bestFeatures" type="checkbox" value="sound"  onChange={ onChangeHandlerCheckBox} checked={isCheckBoxChecked(formValueInputs.bestFeatures, "sound")} />It
      squeaks!</label
    >
  </li>
  <li>
    <label
      ><input name="bestFeatures" type="checkbox" value="logo" checked={isCheckBoxChecked(formValueInputs.bestFeatures, "logo")}   onChange={ onChangeHandlerCheckBox}  />It has a
      logo!</label
    >
  </li>
  <li>
    <label
      ><input name="bestFeatures" type="checkbox" value="size" onChange={ onChangeHandlerCheckBox} checked={isCheckBoxChecked(formValueInputs.bestFeatures, "size")}  />Its big!</label
    >
  </li>
</ul>

        </div>
        <div class="form__group">
          <h3>What would you say that are the worst bits of your rubber duck?</h3>
          
          <ul>
  <li>
    <label
      ><input name="worstFeatures" type="checkbox" value="colour" checked={isCheckBoxChecked(formValueInputs.worstFeatures, "colour")} onChange={ onChangeHandlerCheckBox} />It's
      yellow!</label
    >
  </li>
  <li>
    <label
      ><input name="worstFeatures" type="checkbox" value="sound" checked={isCheckBoxChecked(formValueInputs.worstFeatures, "sound")} onChange={ onChangeHandlerCheckBox} />It
      squeaks!</label
    >
  </li>
  <li>
    <label
      ><input name="worstFeatures" type="checkbox" value="logo" checked={isCheckBoxChecked(formValueInputs.worstFeatures, "logo")}  onChange={ onChangeHandlerCheckBox} />It has a
      logo!</label
    >
  </li>
  <li>
    <label
      ><input name="worstFeatures" type="checkbox" value="size" checked={isCheckBoxChecked(formValueInputs.worstFeatures, "size")}  onChange={ onChangeHandlerCheckBox} />Its big!</label
    >
  </li>
</ul>





        </div>
        <div class="form__group radio">
          <h3>How do you rate your rubber duck consistency?</h3>
          <ul>
  <li>
    <input id="consistency1" type="radio" name="consistency" value="1" onChange={onChangeHandlerRadio} /><label
      for="consistency1"
      >1</label
    >
  </li>
  <li>
    <input id="consistency2" type="radio" name="consistency" value="2" onChange={onChangeHandlerRadio} /><label
      for="consistency2"
      >2</label
    >
  </li>
  <li>
    <input id="consistency3" type="radio" name="consistency" value="3" onChange={onChangeHandlerRadio} /><label
      for="consistency3"
      >3</label
    >
  </li>
  <li>
    <input id="consistency4" type="radio" name="consistency" value="4" onChange={onChangeHandlerRadio} /><label
      for="consistency4"
      >4</label
    >
  </li>
</ul>
       
        </div>
        <div class="form__group radio">
          <h3>How do you rate your rubber duck colour?</h3>
          <ul>
  <li>
    <input id="colour1" type="radio" name="colour" value="1" onChange={onChangeHandlerRadio} /><label
      for="colour1"
      >1</label
    >
  </li>
  <li>
    <input id="colour2" type="radio" name="colour" value="2" onChange={onChangeHandlerRadio} /><label
      for="colour2"
      >2</label
    >
  </li>
  <li>
    <input id="colour3" type="radio" name="colour" value="3" onChange={onChangeHandlerRadio} /><label
      for="colour3"
      >3</label
    >
  </li>
  <li>
    <input id="colour4" type="radio" name="colour" value="4" onChange={onChangeHandlerRadio} /><label
      for="colour4"
      >4</label
    >
  </li>
</ul>
         
        </div>
        <div class="form__group radio">
          <h3>How do you rate your rubber duck logo?</h3>
          <ul>
  <li>
    <input id="logo1" type="radio" name="logo" value="1" onChange={onChangeHandlerRadio} /><label
      for="logo1"
      >1</label
    >
  </li>
  <li>
    <input id="logo2" type="radio" name="logo" value="2" onChange={onChangeHandlerRadio} /><label
      for="logo2"
      >2</label
    >
  </li>
  <li>
    <input id="logo3" type="radio" name="logo" value="3" onChange={onChangeHandlerRadio} /><label
      for="logo3"
      >3</label
    >
  </li>
  <li>
    <input id="logo4" type="radio" name="logo" value="4" onChange={onChangeHandlerRadio} /><label
      for="logo4"
      >4</label
    >
  </li>
</ul>
       
        </div>
        <div class="form__group">
          <h3>How do you like to spend time with your rubber duck</h3>
          <ul>
  <li>
    <label
      ><input name="timeSpent" type="checkbox" value="swimming" onChange={onChangeHandlerCheckBox} />Swimming</label
    >
  </li>
  <li>
    <label
      ><input name="timeSpent" type="checkbox" value="bathing" onChange={onChangeHandlerCheckBox} />Bathing</label
    >
  </li>
  <li>
    <label
      ><input name="timeSpent" type="checkbox" value="chatting" onChange={onChangeHandlerCheckBox} />Chatting</label
    >
  </li>
  <li>
    <label
      ><input name="timeSpent" type="checkbox" value="dont like spending time with it" onChange={onChangeHandlerCheckBox}/>Dont like spending time with it</label
    >
  </li>
</ul>
         
        </div>
        <label
          >What else have you got to say about your rubber duck?<textarea
            name="review"
            cols="30"
            rows="10"
            value={formValueInputs.review}
            onChange={onChangeHandlerRadio}
          ></textarea></label
        ><label
          >Put your name here (if you feel like it):<input
            type="text"
            name="username"
            value={formValueInputs.username}
            onChange={onChangeHandlerRadio}
             /></label
        ><label
          >Leave us your email pretty please??<input
            type="email"
            name="email"
            value={formValueInputs.email}
            onChange={onChangeHandlerRadio}
             /></label
        ><input class="form__submit" type="submit" value="Submit Survey!" />
      </form>
      
    )
}

export default Form;