import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { colours } from "../../colours"

type NewWord = {
  chinese: string
  pinyin: string
  english: string
  wordType: string
}

type ConversationLine = {
  chinese: string
  pinyin: string
  english: string
  notes: string
  speaker: string
}

interface ConversationExmapleInterface {
  newWords: NewWord[]
  conversation: ConversationLine[]
  title: string
  description: string
}

export const ConversationExample: FunctionComponent<ConversationExmapleInterface> = ({
  newWords,
  conversation,
  title,
  description,
}) => {
  return (
    <Container>
      <p style={{ paddingBottom: 8, color: colours.darkblue }}>{description}</p>
      {conversation.map((v, i) => {
        return (
          <ConverstaionLineContainer>
            <SpeakerContainer>{v.speaker}</SpeakerContainer>
            {/*@TODO CHANGE THIS TO BREAK DOWN THE CHARACTERS TO ALOW HOVER AND INSPECTION */}
            <LineContainer>
              <LineChinese>{v.chinese}</LineChinese>
              <p>{v.pinyin}</p>
              <p>{v.english}</p>
            </LineContainer>
          </ConverstaionLineContainer>
        )
      })}
      <Heading>New Words</Heading>
      {newWords.map((v, i) => {
        return (
          <NewWordContainer>
            <NewWordChinese>{v.chinese}</NewWordChinese>
            <NewWordEnglish>{v.english}</NewWordEnglish>
            <NewWordPinyin>{v.pinyin}</NewWordPinyin>
            <NewWordType>{v.wordType}</NewWordType>
          </NewWordContainer>
        )
      })}
    </Container>
  )
}

const LineChinese = styled.p`
  font-size: 24px;
`

const Heading = styled.h4`
  color: ${colours.darkblue};
`

const ConverstaionLineContainer = styled.div`
  background-color: white;
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  padding-left: 32px;
  color: ${colours.darkblue};
`
const SpeakerContainer = styled.div`
  display: inline-block;
  font-size: 40px;
  margin-right: 16px;
  /* border: 1px solid black; */
`

const LineContainer = styled.div`
  display: inline-block;
  /* border: 1px solid black; */
`
const Container = styled.div`
  /* border: 1px solid black; */
  border: 1px solid ${colours.green};
  padding: 16px;
  border-radius: 16px;
`

const NewWordChinese = styled.h4`
  /* border: 1px solid black; */
  font-weight: 100;
  text-align: center;
  font-size: 32px;
  color: black;
  margin-left: 8px;
  margin-right: 8px;
  border-radius: 4px;
  background-color: white;
`

const NewWordEnglish = styled.p`
  /* border: 1px solid black; */
  padding-top: 4px;
  padding-bottom: 4px;
  text-align: center;
  font-size: 24px;
  color: white;
`
const NewWordPinyin = styled.p`
  /* border: 1px solid black; */

  text-align: center;
  font-size: 16px;
  color: white;
`
const NewWordType = styled.p`
  /* border: 1px solid black; */

  text-align: center;
  font-size: 16px;
  color: white;
`
const NewWordContainer = styled.div`
  /* border: 1px solid black; */
  display: inline-block;
  width: 200px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-right: 8px;
  border-radius: 8px;
  background-color: ${colours.green};
`
