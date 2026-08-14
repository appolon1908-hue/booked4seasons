export const policyVersion = "B4S-2026-08-14-v1";
export const policyEffectiveDate = "August 14, 2026";

export const requestableServices = [
  ["plumbing", "Plumbing"],
  ["electrical", "Electrical"],
  ["handyman", "Handyman"],
  ["heating", "Heating"],
  ["cooling", "Cooling"],
  ["appliance-repair", "Appliance repair"],
  ["cleaning", "Cleaning"],
  ["locksmith", "Locksmith"],
  ["painting", "Painting"],
  ["carpentry", "Carpentry"],
  ["moving-help", "Moving help"],
  ["home-maintenance", "Home maintenance"],
] as const;

export const usStates = [
  ["AL", "Alabama"], ["AK", "Alaska"], ["AZ", "Arizona"], ["AR", "Arkansas"],
  ["CA", "California"], ["CO", "Colorado"], ["CT", "Connecticut"], ["DE", "Delaware"],
  ["DC", "District of Columbia"], ["FL", "Florida"], ["GA", "Georgia"], ["HI", "Hawaii"],
  ["ID", "Idaho"], ["IL", "Illinois"], ["IN", "Indiana"], ["IA", "Iowa"],
  ["KS", "Kansas"], ["KY", "Kentucky"], ["LA", "Louisiana"], ["ME", "Maine"],
  ["MD", "Maryland"], ["MA", "Massachusetts"], ["MI", "Michigan"], ["MN", "Minnesota"],
  ["MS", "Mississippi"], ["MO", "Missouri"], ["MT", "Montana"], ["NE", "Nebraska"],
  ["NV", "Nevada"], ["NH", "New Hampshire"], ["NJ", "New Jersey"], ["NM", "New Mexico"],
  ["NY", "New York"], ["NC", "North Carolina"], ["ND", "North Dakota"], ["OH", "Ohio"],
  ["OK", "Oklahoma"], ["OR", "Oregon"], ["PA", "Pennsylvania"], ["RI", "Rhode Island"],
  ["SC", "South Carolina"], ["SD", "South Dakota"], ["TN", "Tennessee"], ["TX", "Texas"],
  ["UT", "Utah"], ["VT", "Vermont"], ["VA", "Virginia"], ["WA", "Washington"],
  ["WV", "West Virginia"], ["WI", "Wisconsin"], ["WY", "Wyoming"],
] as const;

export const smsDisclosure =
  "By checking this box, I agree to receive recurring automated service-request and appointment text messages from Booked4Seasons at the mobile number provided. Message frequency varies. Message and data rates may apply. Reply STOP to cancel or HELP for help. Consent is not a condition of purchase.";

export const providerAuthorization =
  "I authorize Booked4Seasons to use my service-request information and provide the information necessary to a selected independent service provider solely to respond to this request. This authorization does not enroll me in marketing messages.";
