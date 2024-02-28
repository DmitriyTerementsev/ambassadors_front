import { Typography } from '@mui/material';
import { useState } from 'react';
import { PopupCreateTaskData } from '../../utils/constants';
import { Button } from '@mui/material';
import SubmitBtn from '../Btns/SubmitBtn/SubmitBtn';
import './PopupCreateTask.css';
import Popup from '../Popup/Popup';
import InputPopupContentFields from '../InputPopupContentFields/InputPopupContentFields';

interface PopupCreateTaskProps {
  open: boolean;
  handleClose: () => void;
}

export default function PopupCreateTask({ open, handleClose }: PopupCreateTaskProps) {
  const handleCancelClick = () => {
    handleClose();
    console.log('btn clicked');
  };

  const [inputPublicationValue, setInputPublicationValue] = useState('');
  const [inputLinkValue, setInputLinkValue] = useState('');
  const [isPublicationClicked, setIsPublicationClicked] = useState(false);
  const [isLinkClicked, setIsLinkClicked] = useState(false);
  const [numberOfComponents, setNumberOfComponents] = useState(1);

  const handleButtonClick = () => {
    if (numberOfComponents < 5) {
      setNumberOfComponents(prevCount => prevCount + 1);
    }
  };

  const handleInputPublicationClick = () => {
    setIsPublicationClicked(true);
    console.log('open btns done and cancel');
  };

  const handleInputLinkClick = () => {
    setIsLinkClicked(true);
    console.log('open btns done and cancel');
  };

  const handleDonePublicationClick = () => {
    setIsPublicationClicked(false);
    console.log('Сохранение данных:', inputPublicationValue);
  };

  const handleCancelPublicationClick = () => {
    setIsPublicationClicked(false);
    console.log('Отмена');
  };

  const handleDoneLinkClick = () => {
    setIsLinkClicked(false);
    console.log('Сохранение данных:', inputLinkValue);
  };

  const handleCancelLinkClick = () => {
    setIsLinkClicked(false);
    console.log('Отмена');
  };

  const componentsArray = Array.from({ length: numberOfComponents }, (_, index) => (
    <div key={index} style={{ marginTop: index > 0 ? '24px' : '0' }}>
      <InputPopupContentFields
        isPublicationClicked={isPublicationClicked}
        inputPublicationValue={inputPublicationValue}
        setInputPublicationValue={setInputPublicationValue}
        handleInputPublicationClick={handleInputPublicationClick}
        handleDonePublicationClick={handleDonePublicationClick}
        handleCancelPublicationClick={handleCancelPublicationClick}
        isLinkClicked={isLinkClicked}
        inputLinkValue={inputLinkValue}
        setInputLinkValue={setInputLinkValue}
        handleInputLinkClick={handleInputLinkClick}
        handleDoneLinkClick={handleDoneLinkClick}
        handleCancelLinkClick={handleCancelLinkClick}
      />
    </div>
  ));

  return (
    <div className="popup-create">
      {open && (
        <Popup open={true} handleClose={handleClose} width="1068px" height="535px">
          <div className="popup-create__content">
            <Typography sx={{ fontSize: '24px', color: '#1A1B22' }}>
              {PopupCreateTaskData.name}
            </Typography>
            <Typography
              sx={{ fontSize: '16px', fontFamily: 'YSText', color: '#797981', marginTop: '4px' }}
            >
              {PopupCreateTaskData.direction}
            </Typography>
            <Typography
              sx={{ fontSize: '11px', fontFamily: 'YSText', color: '#797981', marginTop: '28px' }}
            >
              {PopupCreateTaskData.message}
            </Typography>
            <div className="popup-create__selects">
              {componentsArray}
              {numberOfComponents < 3 && (
                <Button
                  variant="text"
                  sx={{
                    '&:focus': {
                      backgroundColor: 'inherit'
                    },
                    width: '95px',
                    height: '16px',
                    backgroundColor: 'inherit',
                    fontSize: '10px',
                    fontWeight: '400',
                    fontFamily: 'YSText',
                    color: '#23272E',
                    marginTop: '20px',
                    marginLeft: '36px',
                    textTransform: 'none'
                  }}
                  onClick={handleButtonClick}
                >
                  {PopupCreateTaskData.more}
                </Button>
              )}
            </div>
            <div className="popup-create__btn ">
              <SubmitBtn
                width="110px"
                fontSize="14px"
                title="Сохранить"
                onClick={handleCancelClick}
              />
            </div>
          </div>
        </Popup>
      )}
    </div>
  );
}
