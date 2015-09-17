   
    var MultiplicarFraccionario = function(Num1,Den1,Num2,Den2)
    {
        var resNum = Num1*Num2;
        var resden = Den1*Den2;
        var FinNum = resNum;
        var FinDen = resden;
        var i;

        for(i = 0; i<=100 ; i++)
        {

            if(FinNum > 2)
            {
                if(FinNum % 2 == 0)
                {
                    FinNum = FinNum / 2;
                }
                else if (FinNum % 2 > 1)
                {
                      FinNum = FinNum / 3;
                }


             }
     
            if(FinDen > 2)
            {
                if(FinDen % 2 == 0)
                {
                    FinDen = FinDen / 2;
                }
                else if (FinDen % 2 > 1)
                {
                      FinDen = FinDen / 3;
                }

            }
    }
        
        return FinNum + "/" + FinDen;
    };

     var SumaFraccionario = function(Num1,Den1,Num2,Den2)
    {
        var tempNum1 = Num1*Den2;
        var tempNum2 = Den1*Num2;
        var resNum = tempNum1+tempNum2;

        if(Den1==Den2)
        {
            resden = Den1;
        }
        else if (Den1 != Den2 )
        {
            resden = Den1*Den2;
        }


        var FinNum = resNum;
        var FinDen = resden;
        var i;

        for(i = 0; i<=100 ; i++)
        {

        if(FinNum > 2)
        {
            if(FinNum % 2 == 0)
            {
                FinNum = FinNum / 2;
            }
            else if (FinNum % 2 > 1)
            {
                  FinNum = FinNum / 3;
            }


        }
     
        if(FinDen > 2)
        {
              if(FinDen % 2 == 0)
            {
                FinDen = FinDen / 2;
            }
               else if (FinDen % 2 > 1)
            {
                  FinDen = FinDen / 3;
            }

        }
    }
        
        return FinNum + "/" + FinDen;
    };

      var RestaFraccionario = function(Num1,Den1,Num2,Den2)
    {
        var tempNum1 = Num1*Den2;
        var tempNum2 = Den1*Num2;
        var resNum = tempNum1-tempNum2;

        if(Den1==Den2)
        {
            resden = Den1;
        }
        else if (Den1 != Den2 )
        {
            resden = Den1*Den2;
        }


        var FinNum = resNum;
        var FinDen = resden;
        var i;

        for(i = 0; i<=100 ; i++)
        {

        if(FinNum > 2)
        {
            if(FinNum % 2 == 0)
            {
                FinNum = FinNum / 2;
            }
            else if (FinNum % 2 > 1)
            {
                  FinNum = FinNum / 3;
            }


        }
     
        if(FinDen > 2)
        {
              if(FinDen % 2 == 0)
            {
                FinDen = FinDen / 2;
            }
               else if (FinDen % 2 > 1)
            {
                  FinDen = FinDen / 3;
            }

        }
    }
        
        return FinNum + "/" + FinDen;
    };


