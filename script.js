        var no1;
        var method;
        var no2;
        var val;

        function ld()
        {
            var Input = document.getElementById("in").value;
            Input.value = "0";
        }
        function btnX()
        {
            var Input = document.getElementById("in");
            Input.value = "0";
        }
        function btnB()
        {
            var Input = document.getElementById("in");
            
            if(Input.value != "")
            {
                if(Input.value != "")
                {
                    Input.value += ".";
                }
                if(Input.value == "0")
                {
                    Input.value += ".";
                }
                else
                {
                    Input.value == ".";
                }
                if(Input.value == ".")
                {
                    Input.value =".";
                }


            }
        }
        function btn1()
        {
            var Input = document.getElementById("in");
            
            if(Input.value != "")
            {
                if(Input.value == "0")
                {
                    Input.value = "1";
                }
                else
                {
                    Input.value += "1";
                }
            }
        
        }
        function btn2()
        {
            var Input = document.getElementById("in");
            
            if(Input.value != "")
            {
                if(Input.value == "0")
                {
                    Input.value = "2";
                }
                else
                {
                    Input.value += "2";
                }
            }
        }
        function btn3()
        {
            var Input = document.getElementById("in");
            
            if(Input.value != "")
            {
                if(Input.value == "0")
                {
                    Input.value = "3";
                }
                else
                {
                    Input.value += "3";
                }
            }
        }
        function btn4()
        {
            var Input = document.getElementById("in");
            
            if(Input.value != "")
            {
                if(Input.value == "0")
                {
                    Input.value = "4";
                }
                else
                {
                    Input.value += "4";
                }
            }
        }
        function btn5()
        {
            var Input = document.getElementById("in");
            
            if(Input.value != "")
            {
                if(Input.value == "0")
                {
                    Input.value = "5";
                }
                else
                {
                    Input.value += "5";
                }
            }
        }
        function btn6()
        {
            var Input = document.getElementById("in");
            
            if(Input.value != "")
            {
                if(Input.value == "0")
                {
                    Input.value = "6";
                }
                else
                {
                    Input.value += "6";
                }
            }
        }
        function btn7()
        {
            var Input = document.getElementById("in");
            
            if(Input.value != "")
            {
                if(Input.value == "0")
                {
                    Input.value = "7";
                }
                else
                {
                    Input.value += "7";
                }
            }
        }
        function btn8()
        {
            var Input = document.getElementById("in");
            
            if(Input.value != "")
            {
                if(Input.value == "0")
                {
                    Input.value = "8";
                }
                else
                {
                    Input.value += "8";
                }
            }
        }
        function btn9()
        {
            var Input = document.getElementById("in");
            
            if(Input.value != "")
            {
                if(Input.value == "0")
                {
                    Input.value = "9";
                }
                else
                {
                    Input.value += "9";
                }
            }
        }
        function btn0()
        {
            var Input = document.getElementById("in");
            
            if(Input.value != "")
            {
                if(Input.value == "0")
                {
                    Input.value = "0";
                }
                else
                {
                    Input.value += "0";
                }
            }
        }
        function btn00()
        {
            var Input = document.getElementById("in");
            
            if(Input.value != "")
            {
                if(Input.value == "0")
                {
                    Input.value = "00";
                }
                if(Input.value == "00")
                {
                    Input.value = "0";
                }
                else
                {
                    Input.value += "00";
                }
            }
        }
        function btnA()
        {
            no1 = parseInt(document.getElementById("in").value);
            var Input = document.getElementById("in");
            Input.value = "0";
            method = 1;
        }
        function btnS()
        {
            var Input = document.getElementById("in");
            no1 = Input.value;
            Input.value = "0";
            method = 2;
        }
        function btnM()
        {
            var Input = document.getElementById("in");
            no1 = Input.value;
            Input.value = "0";
            method = 3 
        }
        function btnD()
        {
            var Input = document.getElementById("in");
            no1 = Input.value;
            Input.value = "0";
            method = 4;
        }
        function btnE()
        {
            var Input = document.getElementById("in");
            no2 = Input.value;
            switch(method)
            {
                case 1:
                    var val = (no2*1)+(no1*1);
                    Input.value = val;
                    break; 
                case 2:
                    val = no1-Input.value;
                    Input.value = val;
                    break;
                case 3:
                    val = no1*Input.value;
                    Input.value = val;
                    break;
                case 4:
                    val = no1/Input.value;
                    Input.value = val;
                    break;
                default:
                    break;
            }
        }
