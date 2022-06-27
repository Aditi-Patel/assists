import { LightningElement,api ,track} from 'lwc';
import My_Resource from '@salesforce/resourceUrl/santanderLogo';

export default class Navigator extends LightningElement {
  
    @api time1;
  @api type1 ;
  @api description1;
  @api time2;
  @api type2 ;
  @api description2;
  @api time3;
  @api type3 ;
  @api description3;
  @api time4;
  @api type4 ;
  @api description4;
  @api time5;
  @api type5 ;
  @api description5;
  @api time6;
  @api type6 ;
  @api description6;
  @api time7;
  @api type7 ;
  @api description7;
  @api time8;
  @api type8 ;
  @api description8;
  @api time9;
  @api type9 ;
  @api description9;
  @api time10;
  @api type10;
  @api description10;
  @api time11;
  @api type11;
  @api description11;
  
  @track showSearchIcon=false;
  @track showQFeedIcon=false;
  
  logo=My_Resource;
  // steps = [
  //   { label: "Search", value: "Search" },
  //   { label: "Question Posted", value: "Question Posted" },
  //   { label: "Profile Update", value: "Profile Update" },
  //   { label: "Chat Session", value: "Chat Session" },
  //   { label: "Event Registration", value: "Event Registration" },
  //   { label: "Article View", value: "Article View" },
  //   { label: "Form View", value: "Form View" },
  //   { label: "Service Request", value: "Service Request" },
  //   { label: "Ad Click", value: "Ad Click" },
  //   { label: "Marketplace Purchase", value: "Marketplace Purchase" },
  //   { label: "File View", value: "File View" }
  // ];
  
    // get displayIcon1(){
      // if(this.type1 == 'Search'){
      //    this.showSearchIcon = true;
      // }
      // else if(this.type2 == 'Question Posted'){
      //    this.showQFeedIcon = true;
      // }
      // return this.type1 == 'Search' ? 'slds-active':'slds-hide';
      // if(this.type1 == 'Search' ){
      //   return 'slds-active';
      // }
      // else if(this.type1 == 'Question Posted' ){
      //   return 'slds-active';
      // }
      // else{
      //   return 'slds-hide';
      // }
    // }
    // connectedCallback(){
    //   if(this.type1 == 'Search'){
    //        this.showSearchIcon = true;
    //     }
    //     else if(this.type1 == 'Question Posted'){
    //        this.showQFeedIcon = true;
           
    //     }
    //     else{
    //       this.showSearchIcon=false;
    //       this.showQFeedIcon=false;
    //     }
    // }
    get displayIcon1(){
     let iconValue="";
     if(this.type1 == 'Search'){
      iconValue = "standard:search";
    }
    else if(this.type1 == 'Question Posted'){
      iconValue = "standard:question_feed";
    }
    else if(this.type1 == 'Profile Update'){
      iconValue = "standard:people";
    }
    else if(this.type1 == 'Chat Session'){
      iconValue = "standard:messaging_conversation";
    }
    else if(this.type1 == 'Event Registration'){
      iconValue = "standard:service_appointment";
    }
    else if(this.type1 == 'Article View'){
      iconValue = "standard:knowledge";
    }
    else if(this.type1 == 'Form View'){
      iconValue = "standard:form";
    }
    else if(this.type1 == 'Service Request'){
      iconValue = "standard:case";
    }
    else if(this.type1 == 'Ad Click'){
      iconValue = "standard:marketing_actions";
    }
    else if(this.type1 == 'Marketplace Purchase'){
      iconValue = "standard:webcart";
    }
    else if(this.type1== 'File View'){
      iconValue = "standard:file";
    }

    return iconValue;
  }
  
  get displayIcon2(){
    let iconValue="";
    if(this.type2 == 'Search'){
     iconValue = "standard:search";
   }
   else if(this.type2 == 'Question Posted'){
     iconValue = "standard:question_feed";
   }
   else if(this.type2 == 'Profile Update'){
     iconValue = "standard:people";
   }
   else if(this.type2 == 'Chat Session'){
     iconValue = "standard:messaging_conversation";
   }
   else if(this.type2 == 'Event Registration'){
     iconValue = "standard:service_appointment";
   }
   else if(this.type2 == 'Article View'){
     iconValue = "standard:knowledge";
   }
   else if(this.type2 == 'Form View'){
     iconValue = "standard:form";
   }
   else if(this.type2 == 'Service Request'){
     iconValue = "standard:case";
   }
   else if(this.type2 == 'Ad Click'){
     iconValue = "standard:marketing_actions";
   }
   else if(this.type2 == 'Marketplace Purchase'){
     iconValue = "standard:webcart";
   }
   else if(this.type2== 'File View'){
     iconValue = "standard:file";
   }

   return iconValue;
 }
 get displayIcon3(){
  let iconValue="";
  if(this.type3 == 'Search'){
   iconValue = "standard:search";
 }
 else if(this.type3 == 'Question Posted'){
   iconValue = "standard:question_feed";
 }
 else if(this.type3 == 'Profile Update'){
   iconValue = "standard:people";
 }
 else if(this.type3 == 'Chat Session'){
   iconValue = "standard:messaging_conversation";
 }
 else if(this.type3 == 'Event Registration'){
   iconValue = "standard:service_appointment";
 }
 else if(this.type3 == 'Article View'){
   iconValue = "standard:knowledge";
 }
 else if(this.type3 == 'Form View'){
   iconValue = "standard:form";
 }
 else if(this.type3 == 'Service Request'){
   iconValue = "standard:case";
 }
 else if(this.type3 == 'Ad Click'){
   iconValue = "standard:marketing_actions";
 }
 else if(this.type3 == 'Marketplace Purchase'){
   iconValue = "standard:webcart";
 }
 else if(this.type3== 'File View'){
   iconValue = "standard:file";
 }

 return iconValue;
}
get displayIcon4(){
  let iconValue="";
  if(this.type4 == 'Search'){
   iconValue = "standard:search";
 }
 else if(this.type4 == 'Question Posted'){
   iconValue = "standard:question_feed";
 }
 else if(this.type4 == 'Profile Update'){
   iconValue = "standard:people";
 }
 else if(this.type4 == 'Chat Session'){
   iconValue = "standard:messaging_conversation";
 }
 else if(this.type4 == 'Event Registration'){
   iconValue = "standard:service_appointment";
 }
 else if(this.type4 == 'Article View'){
   iconValue = "standard:knowledge";
 }
 else if(this.type4 == 'Form View'){
   iconValue = "standard:form";
 }
 else if(this.type4 == 'Service Request'){
   iconValue = "standard:case";
 }
 else if(this.type4 == 'Ad Click'){
   iconValue = "standard:marketing_actions";
 }
 else if(this.type4 == 'Marketplace Purchase'){
   iconValue = "standard:webcart";
 }
 else if(this.type4== 'File View'){
   iconValue = "standard:file";
 }

 return iconValue;
}
get displayIcon5(){
  let iconValue="";
  if(this.type5 == 'Search'){
   iconValue = "standard:search";
 }
 else if(this.type5 == 'Question Posted'){
   iconValue = "standard:question_feed";
 }
 else if(this.type5 == 'Profile Update'){
   iconValue = "standard:people";
 }
 else if(this.type5 == 'Chat Session'){
   iconValue = "standard:messaging_conversation";
 }
 else if(this.type5 == 'Event Registration'){
   iconValue = "standard:service_appointment";
 }
 else if(this.type5 == 'Article View'){
   iconValue = "standard:knowledge";
 }
 else if(this.type5 == 'Form View'){
   iconValue = "standard:form";
 }
 else if(this.type5 == 'Service Request'){
   iconValue = "standard:case";
 }
 else if(this.type5 == 'Ad Click'){
   iconValue = "standard:marketing_actions";
 }
 else if(this.type5 == 'Marketplace Purchase'){
   iconValue = "standard:webcart";
 }
 else if(this.type5== 'File View'){
   iconValue = "standard:file";
 }

 return iconValue;
}
get displayIcon6(){
  let iconValue="";
 
  if(this.type6== 'Search'){
   iconValue = "standard:search";
 }
 else if(this.type6 == 'Question Posted'){
   iconValue = "standard:question_feed";
 }
 else if(this.type6 == 'Profile Update'){
   iconValue = "standard:people";
 }
 else if(this.type6 == 'Chat Session'){
   iconValue = "standard:messaging_conversation";
 }
 else if(this.type6 == 'Event Registration'){
   iconValue = "standard:service_appointment";
 }
 else if(this.type6 == 'Article View'){
   iconValue = "standard:knowledge";
 }
 else if(this.type6 == 'Form View'){
   iconValue = "standard:form";
 }
 else if(this.type6 == 'Service Request'){
   iconValue = "standard:case";
 }
 else if(this.type6 == 'Ad Click'){
   iconValue = "standard:marketing_actions";
 }
 else if(this.type6 == 'Marketplace Purchase'){
   iconValue = "standard:webcart";
 }
 else if(this.type6== 'File View'){
   iconValue = "standard:file";
 }

 return iconValue;
}
get displayIcon7(){
  let iconValue="";
  if(this.type7== 'Search'){
   iconValue = "standard:search";
 }
 else if(this.type7 == 'Question Posted'){
   iconValue = "standard:question_feed";
 }
 else if(this.type7 == 'Profile Update'){
   iconValue = "standard:people";
 }
 else if(this.type7 == 'Chat Session'){
   iconValue = "standard:messaging_conversation";
 }
 else if(this.type7 == 'Event Registration'){
   iconValue = "standard:service_appointment";
 }
 else if(this.type7 == 'Article View'){
   iconValue = "standard:knowledge";
 }
 else if(this.type7 == 'Form View'){
   iconValue = "standard:form";
 }
 else if(this.type7 == 'Service Request'){
   iconValue = "standard:case";
 }
 else if(this.type7 == 'Ad Click'){
   iconValue = "standard:marketing_actions";
 }
 else if(this.type7 == 'Marketplace Purchase'){
   iconValue = "standard:webcart";
 }
 else if(this.type7== 'File View'){
   iconValue = "standard:file";
 }

 return iconValue;
}
get displayIcon8(){
  let iconValue="";
  if(this.type8== 'Search'){
   iconValue = "standard:search";
 }
 else if(this.type8 == 'Question Posted'){
   iconValue = "standard:question_feed";
 }
 else if(this.type8 == 'Profile Update'){
   iconValue = "standard:people";
 }
 else if(this.type8 == 'Chat Session'){
   iconValue = "standard:messaging_conversation";
 }
 else if(this.type8 == 'Event Registration'){
   iconValue = "standard:service_appointment";
 }
 else if(this.type8 == 'Article View'){
   iconValue = "standard:knowledge";
 }
 else if(this.type8 == 'Form View'){
   iconValue = "standard:form";
 }
 else if(this.type8 == 'Service Request'){
   iconValue = "standard:case";
 }
 else if(this.type8 == 'Ad Click'){
   iconValue = "standard:marketing_actions";
 }
 else if(this.type8 == 'Marketplace Purchase'){
   iconValue = "standard:webcart";
 }
 else if(this.type8== 'File View'){
   iconValue = "standard:file";
 }

 return iconValue;
}
get displayIcon9(){
  let iconValue="";
  if(this.type9== 'Search'){
   iconValue = "standard:search";
 }
 else if(this.type9 == 'Question Posted'){
   iconValue = "standard:question_feed";
 }
 else if(this.type9 == 'Profile Update'){
   iconValue = "standard:people";
 }
 else if(this.type9 == 'Chat Session'){
   iconValue = "standard:messaging_conversation";
 }
 else if(this.type9 == 'Event Registration'){
   iconValue = "standard:service_appointment";
 }
 else if(this.type9 == 'Article View'){
   iconValue = "standard:knowledge";
 }
 else if(this.type9 == 'Form View'){
   iconValue = "standard:form";
 }
 else if(this.type9 == 'Service Request'){
   iconValue = "standard:case";
 }
 else if(this.type9 == 'Ad Click'){
   iconValue = "standard:marketing_actions";
 }
 else if(this.type9 == 'Marketplace Purchase'){
   iconValue = "standard:webcart";
 }
 else if(this.type9== 'File View'){
   iconValue = "standard:file";
 }

 return iconValue;
}
get displayIcon10(){
  let iconValue="";
  if(this.type10== 'Search'){
   iconValue = "standard:search";
 }
 else if(this.type10 == 'Question Posted'){
   iconValue = "standard:question_feed";
 }
 else if(this.type10== 'Profile Update'){
   iconValue = "standard:people";
 }
 else if(this.type10== 'Chat Session'){
   iconValue = "standard:messaging_conversation";
 }
 else if(this.type10== 'Event Registration'){
   iconValue = "standard:service_appointment";
 }
 else if(this.type10== 'Article View'){
   iconValue = "standard:knowledge";
 }
 else if(this.type10== 'Form View'){
   iconValue = "standard:form";
 }
 else if(this.type10== 'Service Request'){
   iconValue = "standard:case";
 }
 else if(this.type10== 'Ad Click'){
   iconValue = "standard:marketing_actions";
 }
 else if(this.type10== 'Marketplace Purchase'){
   iconValue = "standard:webcart";
 }
 else if(this.type10== 'File View'){
   iconValue = "standard:file";
 }

 return iconValue;
}
get displayIcon11(){
  let iconValue="";
  if(this.type11== 'Search'){
   iconValue = "standard:search";
 }
 else if(this.type11 == 'Question Posted'){
   iconValue = "standard:question_feed";
 }
 else if(this.type11== 'Profile Update'){
   iconValue = "standard:people";
 }
 else if(this.type11 == 'Chat Session'){
   iconValue = "standard:messaging_conversation";
 }
 else if(this.type11== 'Event Registration'){
   iconValue = "standard:service_appointment";
 }
 else if(this.type11== 'Article View'){
   iconValue = "standard:knowledge";
 }
 else if(this.type11 == 'Form View'){
   iconValue = "standard:form";
 }
 else if(this.type11== 'Service Request'){
   iconValue = "standard:case";
 }
 else if(this.type11== 'Ad Click'){
   iconValue = "standard:marketing_actions";
 }
 else if(this.type11== 'Marketplace Purchase'){
   iconValue = "standard:webcart";
 }
 else if(this.type11=='File View'){
   iconValue = "standard:file";
 }

 return iconValue;
}
           
}