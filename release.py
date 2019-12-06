import os
import sys

VERSION=sys.argv[1]

def release(v):


    if len(v) > 0 :
        print(v)

        SLACK_MSG="{\"text\":\"Triip Chainnet released version `%s`\"}" % v

        print(SLACK_MSG)

        cmd="""
            git pull && \\
            git tag {} && \\
            git push origin {} && \\
            ./mvnw clean package -Pprod jib:dockerBuild -DskipTests -Drelease.version={} && \\
            docker push repo.treescale.com/triip/triip_chainnet:{} && \\
            curl -X POST -H 'Content-type: application/json' --data '{}' https://hooks.slack.com/services/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
        """.format(v, v, v, v, SLACK_MSG)

        print(cmd)

        os.system(cmd)

release(VERSION)        
