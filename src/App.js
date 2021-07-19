import React, { useState } from 'react';

import { PageCharacters } from './PageCharacters';

function App() {
  return (
    <div>
      <PageCharacters filterName="filterName" />
    </div>
  );
}

export default App;
