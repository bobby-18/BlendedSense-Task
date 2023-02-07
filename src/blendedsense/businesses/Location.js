import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

export default function Location() {
  return (
    <div>
      <GooglePlacesAutocomplete />
    </div>
  );
}
