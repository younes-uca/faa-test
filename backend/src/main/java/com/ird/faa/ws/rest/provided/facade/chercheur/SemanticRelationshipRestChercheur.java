package  com.ird.faa.ws.rest.provided.facade.chercheur;

import com.ird.faa.service.chercheur.facade.SemanticRelationshipChercheurService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.ird.faa.bean.SemanticRelationship;
import com.ird.faa.ws.rest.provided.converter.SemanticRelationshipConverter;
import com.ird.faa.ws.rest.provided.vo.SemanticRelationshipVo;

@Api("Manages semanticRelationship services")
@RestController
@RequestMapping("api/chercheur/semanticRelationship")
public class SemanticRelationshipRestChercheur {

@Autowired
private SemanticRelationshipChercheurService semanticRelationshipService;

@Autowired
private SemanticRelationshipConverter semanticRelationshipConverter;


            @ApiOperation("Updates the specified  semanticRelationship")
            @PutMapping("/")
            public  SemanticRelationshipVo update(@RequestBody  SemanticRelationshipVo  semanticRelationshipVo){
            SemanticRelationship semanticRelationship = semanticRelationshipConverter.toItem(semanticRelationshipVo);
            semanticRelationship = semanticRelationshipService.update(semanticRelationship);
            return semanticRelationshipConverter.toVo(semanticRelationship);
            }

    @ApiOperation("Finds a list of all semanticRelationships")
    @GetMapping("/")
    public List<SemanticRelationshipVo> findAll(){
        return semanticRelationshipConverter.toVo(semanticRelationshipService.findAll());
    }

    @ApiOperation("Finds a semanticRelationship with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public SemanticRelationshipVo findByIdWithAssociatedList(@PathVariable Long id){
    return semanticRelationshipConverter.toVo(semanticRelationshipService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search semanticRelationship by a specific criteria")
    @PostMapping("/search")
    public List<SemanticRelationshipVo> findByCriteria(@RequestBody SemanticRelationshipVo semanticRelationshipVo){
        return semanticRelationshipConverter.toVo(semanticRelationshipService.findByCriteria(semanticRelationshipVo));
        }

            @ApiOperation("Finds a semanticRelationship by id")
            @GetMapping("/id/{id}")
            public SemanticRelationshipVo findById(@PathVariable Long id){
            return semanticRelationshipConverter.toVo(semanticRelationshipService.findById(id));
            }

            @ApiOperation("Saves the specified  semanticRelationship")
            @PostMapping("/")
            public SemanticRelationshipVo save(@RequestBody SemanticRelationshipVo semanticRelationshipVo){
            SemanticRelationship semanticRelationship = semanticRelationshipConverter.toItem(semanticRelationshipVo);
            semanticRelationship = semanticRelationshipService.save(semanticRelationship);
            return semanticRelationshipConverter.toVo(semanticRelationship);
            }

            @ApiOperation("Delete the specified semanticRelationship")
            @DeleteMapping("/")
            public int delete(@RequestBody SemanticRelationshipVo semanticRelationshipVo){
            SemanticRelationship semanticRelationship = semanticRelationshipConverter.toItem(semanticRelationshipVo);
            return semanticRelationshipService.delete(semanticRelationship);
            }

            @ApiOperation("Deletes a semanticRelationship by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return semanticRelationshipService.deleteById(id);
            }


            }
