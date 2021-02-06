import React, { useState } from 'react';
import {
  AccordionDetails,
  AccordionSummary,
  Accordion as AccordionMt,
  IconButton, Tooltip,
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export interface AccordionProps {
  summary: React.ReactNode;
  details: React.ReactNode;
}

const Accordion = ({ summary, details }: AccordionProps):JSX.Element => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const expander = (
    <label htmlFor="icon-button-remove" style={{height: 40}}>
      <Tooltip title="Rozwiń" aria-label="remove">
        <IconButton aria-label="Expand question" style={{marginTop: -4}} component="span">
          <ExpandMoreIcon />
        </IconButton>
      </Tooltip>
    </label>
  );

  return (
    <AccordionMt expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary
        expandIcon={expander}
        aria-label="Expand"
        aria-controls="additional-actions1-content"
        id="additional-actions1-header"
      >
        {summary}
      </AccordionSummary>
      <AccordionDetails>
        {details}
      </AccordionDetails>
    </AccordionMt>
  )
}

export default Accordion;
