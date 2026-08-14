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
  "By checking this optional box, I agree to receive recurring service-related SMS messages from Booked4Seasons, operated by Codestra LLC, at the mobile number provided, including messages concerning my service request, appointment coordination, provider updates, and customer support. Message frequency varies. Message and data rates may apply. Reply HELP for help or STOP to opt out. Consent is not a condition of requesting or purchasing services.";

export const providerAuthorization =
  "I authorize Booked4Seasons, operated by Codestra LLC, to use my service-request information and disclose only the information reasonably necessary to a selected independent service provider to evaluate and respond to this request. This authorization does not enroll me in SMS or marketing messages.";
