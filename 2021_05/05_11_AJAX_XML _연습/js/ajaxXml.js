;(function($){

    var ajaxXml = {

        init:function(){
            this.ajaxXmlFn();

        },
        ajaxXmlFn:function(){
            var $xmlBtn = $('.xml-btn');
            var $tBody  = $('.sungjuk tbody');
            var a = [];
            var temp = null;
            var rank = 1;
            var txt = '';
            var $korBtn = $('.kor-btn');
            var $engBtn = $('.eng-btn');
            var $matBtn = $('.mat-btn');
            var $rankBtn = $('.rank-btn');


            $xmlBtn.on({
                click:function(){
                    $.ajax({
                        url:'./data/sungjuk.xml',
                        dataType:'xml',
                        success:function(data){
                            $(data).find('record').each(function(idx){
                                a[idx] = [];
                                
                                a[idx][0] = $(this).find('number').text();
                                a[idx][1] = $(this).find('name').text();
                                a[idx][2] = parseInt($(this).find('kor').text());
                                a[idx][3] = parseInt($(this).find('eng').text());
                                a[idx][4] = parseInt($(this).find('mat').text());
                                a[idx][5] = a[idx][2] + a[idx][3] + a[idx][4];
                                a[idx][6] = Math.round(a[idx][5]/3);

                                if(a[idx][6] >= 95){
                                    a[idx][7] = 'A+';
                                }
                                else if(a[idx][6] >= 90){
                                    a[idx][7] = 'A';
                                }
                                else if(a[idx][6] >= 85){
                                    a[idx][7] = 'B+';
                                }
                                else if(a[idx][6] >= 80){
                                    a[idx][7] = 'B';
                                }
                                else if(a[idx][6] >= 70){
                                    a[idx][7] = 'C';
                                }
                                else if(a[idx][6] >= 60){
                                    a[idx][7] = 'D';
                                }
                                else{
                                    a[idx][7] = 'F';
                                }
                            });

                            for(var i=0; i<a.length; i++){
                                rank = 1;
                                for(var j=0; j<a.length; j++){
                                    if(a[i][5] < a[j][5]){
                                        rank++;
                                    }
                                }
                                a[i][8] = rank;
                            }

                            for(var i=0; i<a.length; i++){
                                txt += '<tr>'
                                for(var j=0; j<a.length-1; j++){
                                    txt += '<td>' + a[i][j] + '</td>'
                                }
                                txt += '</tr>'
                            }

                            $tBody.html(txt);
                            txt = '';

                        },
                        error:function(){
                            alert('ajax failed');
                        }
                    });
                }
            });

            $korBtn.on({
                click:function(){
                    $.ajax({
                        url:'./data/sungjuk.xml',
                        dataType:'xml',
                        success:function(data){
                            $(data).find('record').each(function(idx){
                                a[idx] = [];
                                
                                a[idx][0] = $(this).find('number').text();
                                a[idx][1] = $(this).find('name').text();
                                a[idx][2] = parseInt($(this).find('kor').text());
                                a[idx][3] = parseInt($(this).find('eng').text());
                                a[idx][4] = parseInt($(this).find('mat').text());
                                a[idx][5] = a[idx][2] + a[idx][3] + a[idx][4];
                                a[idx][6] = Math.round(a[idx][5]/3);

                                if(a[idx][6] >= 95){
                                    a[idx][7] = 'A+';
                                }
                                else if(a[idx][6] >= 90){
                                    a[idx][7] = 'A';
                                }
                                else if(a[idx][6] >= 85){
                                    a[idx][7] = 'B+';
                                }
                                else if(a[idx][6] >= 80){
                                    a[idx][7] = 'B';
                                }
                                else if(a[idx][6] >= 70){
                                    a[idx][7] = 'C';
                                }
                                else if(a[idx][6] >= 60){
                                    a[idx][7] = 'D';
                                }
                                else{
                                    a[idx][7] = 'F';
                                }
                            });

                            for(var i=0; i<a.length; i++){
                                rank = 1;
                                for(var j=0; j<a.length; j++){
                                    if(a[i][5] < a[j][5]){
                                        rank++;
                                    }
                                }
                                a[i][8] = rank;
                            }

                            for(var i=0; i<a.length; i++){
                                for(var j=i+1; j<a.length; j++){
                                    if(a[i][2] < a[j][2]){
                                        for(var k=0; k<=8; k++){
                                            temp = a[i][k];
                                            a[i][k] = a[j][k];
                                            a[j][k] = temp;
                                        }
                                    }
                                }
                            }

                            for(var i=0; i<a.length; i++){
                                txt += '<tr>'
                                for(var j=0; j<a.length-1; j++){
                                    txt += '<td>' + a[i][j] + '</td>'
                                }
                                txt += '</tr>'
                            }

                            $tBody.html(txt);
                            txt = '';

                        },
                        error:function(){
                            alert('ajax failed');
                        }
                    });
                }
            });

            $engBtn.on({
                click:function(){
                    $.ajax({
                        url:'./data/sungjuk.xml',
                        dataType:'xml',
                        success:function(data){
                            $(data).find('record').each(function(idx){
                                a[idx] = [];
                                
                                a[idx][0] = $(this).find('number').text();
                                a[idx][1] = $(this).find('name').text();
                                a[idx][2] = parseInt($(this).find('kor').text());
                                a[idx][3] = parseInt($(this).find('eng').text());
                                a[idx][4] = parseInt($(this).find('mat').text());
                                a[idx][5] = a[idx][2] + a[idx][3] + a[idx][4];
                                a[idx][6] = Math.round(a[idx][5]/3);

                                if(a[idx][6] >= 95){
                                    a[idx][7] = 'A+';
                                }
                                else if(a[idx][6] >= 90){
                                    a[idx][7] = 'A';
                                }
                                else if(a[idx][6] >= 85){
                                    a[idx][7] = 'B+';
                                }
                                else if(a[idx][6] >= 80){
                                    a[idx][7] = 'B';
                                }
                                else if(a[idx][6] >= 70){
                                    a[idx][7] = 'C';
                                }
                                else if(a[idx][6] >= 60){
                                    a[idx][7] = 'D';
                                }
                                else{
                                    a[idx][7] = 'F';
                                }
                            });

                            for(var i=0; i<a.length; i++){
                                rank = 1;
                                for(var j=0; j<a.length; j++){
                                    if(a[i][5] < a[j][5]){
                                        rank++;
                                    }
                                }
                                a[i][8] = rank;
                            }

                            for(var i=0; i<a.length; i++){
                                for(var j=i+1; j<a.length; j++){
                                    if(a[i][3] < a[j][3]){
                                        for(var k=0; k<=8; k++){
                                            temp = a[i][k];
                                            a[i][k] = a[j][k];
                                            a[j][k] = temp;
                                        }
                                    }
                                }
                            }

                            for(var i=0; i<a.length; i++){
                                txt += '<tr>'
                                for(var j=0; j<a.length-1; j++){
                                    txt += '<td>' + a[i][j] + '</td>'
                                }
                                txt += '</tr>'
                            }

                            $tBody.html(txt);
                            txt = '';

                        },
                        error:function(){
                            alert('ajax failed');
                        }
                    });
                }
            });

            $matBtn.on({
                click:function(){
                    $.ajax({
                        url:'./data/sungjuk.xml',
                        dataType:'xml',
                        success:function(data){
                            $(data).find('record').each(function(idx){
                                a[idx] = [];
                                
                                a[idx][0] = $(this).find('number').text();
                                a[idx][1] = $(this).find('name').text();
                                a[idx][2] = parseInt($(this).find('kor').text());
                                a[idx][3] = parseInt($(this).find('eng').text());
                                a[idx][4] = parseInt($(this).find('mat').text());
                                a[idx][5] = a[idx][2] + a[idx][3] + a[idx][4];
                                a[idx][6] = Math.round(a[idx][5]/3);

                                if(a[idx][6] >= 95){
                                    a[idx][7] = 'A+';
                                }
                                else if(a[idx][6] >= 90){
                                    a[idx][7] = 'A';
                                }
                                else if(a[idx][6] >= 85){
                                    a[idx][7] = 'B+';
                                }
                                else if(a[idx][6] >= 80){
                                    a[idx][7] = 'B';
                                }
                                else if(a[idx][6] >= 70){
                                    a[idx][7] = 'C';
                                }
                                else if(a[idx][6] >= 60){
                                    a[idx][7] = 'D';
                                }
                                else{
                                    a[idx][7] = 'F';
                                }
                            });

                            for(var i=0; i<a.length; i++){
                                rank = 1;
                                for(var j=0; j<a.length; j++){
                                    if(a[i][5] < a[j][5]){
                                        rank++;
                                    }
                                }
                                a[i][8] = rank;
                            }

                            for(var i=0; i<a.length; i++){
                                for(var j=i+1; j<a.length; j++){
                                    if(a[i][4] < a[j][4]){
                                        for(var k=0; k<=8; k++){
                                            temp = a[i][k];
                                            a[i][k] = a[j][k];
                                            a[j][k] = temp;
                                        }
                                    }
                                }
                            }

                            for(var i=0; i<a.length; i++){
                                txt += '<tr>'
                                for(var j=0; j<a.length-1; j++){
                                    txt += '<td>' + a[i][j] + '</td>'
                                }
                                txt += '</tr>'
                            }

                            $tBody.html(txt);
                            txt = '';

                        },
                        error:function(){
                            alert('ajax failed');
                        }
                    });
                }
            });

            $rankBtn.on({
                click:function(){
                    $.ajax({
                        url:'./data/sungjuk.xml',
                        dataType:'xml',
                        success:function(data){
                            $(data).find('record').each(function(idx){
                                a[idx] = [];
                                
                                a[idx][0] = $(this).find('number').text();
                                a[idx][1] = $(this).find('name').text();
                                a[idx][2] = parseInt($(this).find('kor').text());
                                a[idx][3] = parseInt($(this).find('eng').text());
                                a[idx][4] = parseInt($(this).find('mat').text());
                                a[idx][5] = a[idx][2] + a[idx][3] + a[idx][4];
                                a[idx][6] = Math.round(a[idx][5]/3);

                                if(a[idx][6] >= 95){
                                    a[idx][7] = 'A+';
                                }
                                else if(a[idx][6] >= 90){
                                    a[idx][7] = 'A';
                                }
                                else if(a[idx][6] >= 85){
                                    a[idx][7] = 'B+';
                                }
                                else if(a[idx][6] >= 80){
                                    a[idx][7] = 'B';
                                }
                                else if(a[idx][6] >= 70){
                                    a[idx][7] = 'C';
                                }
                                else if(a[idx][6] >= 60){
                                    a[idx][7] = 'D';
                                }
                                else{
                                    a[idx][7] = 'F';
                                }
                            });

                            for(var i=0; i<a.length; i++){
                                rank = 1;
                                for(var j=0; j<a.length; j++){
                                    if(a[i][5] < a[j][5]){
                                        rank++;
                                    }
                                }
                                a[i][8] = rank;
                            }

                            for(var i=0; i<a.length; i++){
                                for(var j=i+1; j<a.length; j++){
                                    if(a[i][8] > a[j][8]){
                                        for(var k=0; k<=8; k++){
                                            temp = a[i][k];
                                            a[i][k] = a[j][k];
                                            a[j][k] = temp;
                                        }
                                    }
                                }
                            }

                            for(var i=0; i<a.length; i++){
                                txt += '<tr>'
                                for(var j=0; j<a.length-1; j++){
                                    txt += '<td>' + a[i][j] + '</td>'
                                }
                                txt += '</tr>'
                            }

                            $tBody.html(txt);
                            txt = '';

                        },
                        error:function(){
                            alert('ajax failed');
                        }
                    });
                }
            });

        }

    }

    ajaxXml.init();

})(jQuery);