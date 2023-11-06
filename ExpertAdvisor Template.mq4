//+------------------------------------------------------------------+
#property copyright "Copyright 2022, ibbuhussain"
#property link      "https://www.twitter.com/ibbuhussain"
#property version   "10.03.2022"
#property strict
/*/-------------------------------------U P D A T E--------------------------------------------------------//

----------------------------------------E R R O R S-------------------------------------------------------/

----------------------------------------------------------------------------------------------/*/
//+------------------------------------------------------------------+
//| Expert initialization function                                   |
//+------------------------------------------------------------------+
datetime EXPIRY = "2022.05.22";
#include<myMade.mqh>
#include<Label.mqh>
//#property show_inputs


//+------------------------------------------------------------------+
//| Expert initialization function                                   |
//+------------------------------------------------------------------+
int OnInit()
  {
//---
   if(ExpiryDate(EXPIRY))
     {
      //EXPIRY DATE

      if(trading_toAllowed_Alert())
        {
         //ChartSetSymbolPeriod(0,"EURUSD",PERIOD_H1);
         //Comment("LOT SIZE = "+lot);
         //LabelCreate(0,"eaLABEL",0,InpX,InpY,CORNER_LEFT_UPPER,"Ea _ Name",InpFont,InpFontSize,
         //       clrPaleTurquoise,InpAngle,InpAnchor,InpBack,InpSelection,InpHidden,InpZOrder);
        }//trading allowed alert
     }//EXPIRY DATE
//---
   return(INIT_SUCCEEDED);

  }
//+------------------------------------------------------------------+
//| Expert deinitialization function                                 |
//+------------------------------------------------------------------+
void OnDeinit(const int reason)
  {
//---
// LabelDelete(0,"eaLABEL");
   Comment("");
  }
//+------------------------------------------------------------------+
//| Expert tick function                                             |
//+------------------------------------------------------------------+
void OnTick()
  {
   if(ExpiryDate(EXPIRY))
     {
      //EXPIRY DATE
      //---

      if(trading_toAllowed())
        {
//# # ## # # # ## # # # # ## # # # # # # T R AD I N G   S T A R T S ### # # # # # # ## # # ## #  # # # # # # # # # # #
         if(!totalOrderbyMagicNo(MagicNo))
           {


           }//Magic no
        }// Trading to Allowed close
     }//EXPIRY DATE
  }//ontick
//+--------------------------- - - -- - - - - - - - -  --  - - - - - - - - - - - - -- - - - -    - --------------+
