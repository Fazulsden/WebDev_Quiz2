import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FAQList() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    axios.get('https://sandbox.practical.me/api/faq')
      .then(response => {
        if (response.data.isSuccess) {
          setFaqs(response.data.data);
        }
      })
      .catch(error => console.error('Error fetching FAQs:', error));
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq) => (
        <Accordion key={faq.id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography dangerouslySetInnerHTML={{ __html: faq.answer }} />
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}

export default FAQList;
