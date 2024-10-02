SELECT P.nome, D.nome , D.idade 
FROM Pets P 
JOIn Dono D ON P.dono_id = D.dono_id
WHERE P.dono_idIN ( 
    SELECT P2.dono_id 
    FROM Pets P2
    GROUP BY P2.dono_id
    HAVING COUNT(P2.animal_id) = 2 
)
ORDER BY P.idade ASC
LIMIT 1;